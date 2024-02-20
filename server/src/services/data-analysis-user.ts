import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DataAnalysisUser {
    static async data(refreshToken: string) {
        const userData = await prisma.tokenModels.findFirst({ where: { RefreshToken: refreshToken } });
        if (!userData) return new Error("User not found");

        const allWordsCategoryByUserId = await prisma.userCollections.findFirst({ where: { UserId: userData?.Id, Name: "AllWords" } });
        if (!allWordsCategoryByUserId) return new Error("User category not found");

        const allWordsByUserId = await prisma.intermediateWordsCollections.findMany({ where: { UserColletion: allWordsCategoryByUserId?.Id } });
        if (!allWordsByUserId) return new Error("User words not found");
    }
}