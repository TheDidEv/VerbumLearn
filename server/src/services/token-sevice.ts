import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import UserDto from "../dtos/user-dto";
//require("dotenv").config({ path: __dirname + './../../.env' });

const prisma = new PrismaClient();

export default class TokenService {
    async generateToken(userDto: UserDto) {
        const payload = {
            Id: userDto.Id,
            Email: userDto.Email,
            UserName: userDto.UserName,
            Activated: userDto.Activated,
            ActivationLink: userDto.ActivationLink
        }
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SYCRET!, {
            expiresIn: '15m'
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SYCRET!, {
            expiresIn: '15d'
        });

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId: string, refreshToken: string) {
        const tokenData = await prisma.tokenModels.findFirst({
            where: {
                UserId: userId
            }
        });

        if (tokenData) {
            return await prisma.tokenModels.update({
                where: { UserId: userId },
                data: {
                    RefreshToken: refreshToken
                }
            });
        }

        const token = await prisma.tokenModels.create({
            data: {
                UserId: userId,
                RefreshToken: refreshToken
            }
        });
        return token;
    }

    async validateAccessToken(token: string) {
        const userData = await jwt.verify(token, process.env.JWT_ACCESS_SYCRET!);
        return userData
    }

    async validateRefreshToken(token: string) {
        const userData = await jwt.verify(token, process.env.JWT_REFRESH_SYCRET!);
        return userData
    }

    async findToken(refreshToken: string) {
        const tokenData = await prisma.tokenModels.findFirst({
            where: {
                RefreshToken: refreshToken
            }
        });
        return tokenData;
    }
}
