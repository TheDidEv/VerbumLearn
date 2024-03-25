import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type statusWord = {
    WRONG: number,
    MID: number,
    LERNED: number
}

export class DataAnalysisUser {
    static async dataAll(userId: string) {
        const userData = await prisma.users.findFirst({ where: { Id: userId } });
        if (!userData) return new Error("User not found");

        const allWordsCategoryByUserId = await prisma.userCollections.findFirst({ where: { UserId: userData?.Id, Name: "AllWords" } });
        if (!allWordsCategoryByUserId) return new Error("User category not found");

        const allWordsByUserId = await prisma.intermediateWordsCollections.findMany({ where: { UserColletion: allWordsCategoryByUserId?.Id } });
        if (!allWordsByUserId) return new Error("User words not found");

        let allWordsData: statusWord;

        let wrong = 0;
        let mid = 0;
        let lerned = 0;
        for (const elem of allWordsByUserId) {
            const word = await prisma.userWords.findFirst({ where: { Id: elem.UserWord } });

            if (word?.Status === "WRONG") wrong += 1;
            else if (word?.Status === "MID") mid += 1;
            else if (word?.Status === "LERNED") lerned += 1;
        };

        allWordsData = {
            WRONG: wrong,
            MID: mid,
            LERNED: lerned,
        }

        return allWordsData;
    }

    static getUpdateWordByDate = async (email: string, date: string) => {
        const findDate = new Date(date);

        const findLogs = await prisma.userLogs.findMany({
            where: {
                Email: email,
                CreateAt: {
                    gte: findDate,
                    lt: new Date(findDate.getTime() + 24 * 60 * 60 * 1000)
                }
            },

        });

        return findLogs.length;
    }
}