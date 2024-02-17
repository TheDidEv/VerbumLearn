import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DataAnalysisUser {
    static async data(refreshToken: string) {
        const userId = await prisma.tokenModels.findFirst({ where: { RefreshToken: refreshToken } });
    }
}