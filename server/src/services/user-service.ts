import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 } from 'uuid'
import UserDto from "../dtos/user-dto";


const prisma = new PrismaClient();

type userType = {
    UserName: string,
    Email: string,
    Password: string
}

class UserService {
    async registration(userData: userType) {
        const user = prisma.users.findFirst({
            where: {
                Email: userData.Email
            }
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
             
        }
    }

    async activate() {

    }

    async login() {

    }

    async logout() {

    }

    async refresh() {

    }
}