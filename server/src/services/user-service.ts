import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 } from 'uuid'
import UserDto from "../dtos/user-dto";
import TokenService from './token-sevice';

const prisma = new PrismaClient();
const tokenService = new TokenService();

type userType = {
    UserName: string,
    Email: string,
    Password: string
}

export default class UserService {
    async registration(userData: userType) {
        const user = prisma.users.findFirst({
            where: { Email: userData.Email }
        });

        if (user !== null && user !== undefined) {
            throw new Error("User with such an email already exists");
        } else {
            const hashPasword = await bcrypt.hash(userData.Password, 6);
            const activateLink = v4();//genearte link for activation account

            const newUser = await prisma.users.create({
                data: {
                    Email: userData.Email,
                    UserName: userData.UserName,
                    Password: hashPasword,
                    ActivationLink: activateLink,
                }
            });

            //const mailService.sendActivationLink(newUser.Email, `${process.env.API_URL}/activate/${activateLink}`);

            const userDto = new UserDto(newUser);
            const tokens = tokenService.generateToken({ ...userDto });
            tokenService.saveToken(userDto.Id, (await tokens).refreshToken);
            return {
                ...tokens,
                user: userDto
            }
        }
    }

    async activate(activateLink: string) {
        const user = await prisma.users.findFirst({
            where: { ActivationLink: activateLink }
        });
        if (!user) {
            throw new Error("Incorect link");
        }
        await prisma.users.update({
            where: { Id: user.Id },
            data: { ActivationLink: activateLink }
        });
    }

    async login(email: string, password: string) {
        const user = await prisma.users.findFirst({ where: { Email: email } });
        if (!user) {
            throw new Error("User not found");
        } else {
            const isEqual = bcrypt.compare(password, user.Password);

            if (!isEqual) {
                throw new Error("Wrong password");
            }

            const userDto = new UserDto(user);
            const tokens = tokenService.generateToken(userDto);

            tokenService.saveToken(userDto.Id, (await tokens).refreshToken)
            return {
                ...tokens,
                user: userDto
            }
        }
    }

    async logout(refreshToken: string) {
        const tokenData = await prisma.tokenModels.findFirst({
            where: {
                RefreshToken: refreshToken
            }
        });
        if (tokenData) {
            const token = await prisma.tokenModels.delete({ where: { Id: tokenData.Id } });
            return token;
        } else {
            throw new Error('Not foud token');
        }
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw new Error("Unathorized");
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDB) {
            throw new Error("Unathorized");
        }

    }
}