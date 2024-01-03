import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import UserDto from "../dtos/user-dto";
import TokenService from './token-sevice';
import { UserType } from "../types";

const prisma = new PrismaClient();
const tokenService = new TokenService();

export default class UserService {
    static async registration(userData: UserType) {
        const user = await prisma.users.findFirst({
            where: { Email: userData.Email }
        });

        if (user !== null && user !== undefined) {
            throw new Error("User with such an email already exists");
        } else {
            const hashPasword = await bcrypt.hash(userData.Password, 6);
            const activateLink = uuidv4();//genearte link for activation account

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

    static async activate(activateLink: string) {
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

    static async login(email: string, password: string) {
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

    static async logout(refreshToken: string) {
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

    static async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw new Error("Unathorized");
        }
        const validateToken = await tokenService.validateRefreshToken(refreshToken);
        const userIdFromTokenModel = await prisma.tokenModels.findFirst({
            where: { RefreshToken: refreshToken }
        });
        const tokenFromDB = await tokenService.findToken(refreshToken);

        if (!validateToken || !tokenFromDB) {
            throw new Error("Some erron with tokens");
        }

        const user = await prisma.users.findFirst({
            where: { Id: userIdFromTokenModel?.UserId }
        });

        const userDto = new UserDto(user!);
        const tokens = tokenService.generateToken(userDto);

        return {
            ...tokens,
            user: userDto
        }
    }
}
