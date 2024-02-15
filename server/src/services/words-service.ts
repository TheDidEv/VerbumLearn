import { PrismaClient } from "@prisma/client";
import { WordType } from '../types';

const prisma = new PrismaClient();

export default class WordService {
    static addWord = async (wordType: WordType, token: string) => {
        const userId = await prisma.tokenModels.findFirst({ where: { RefreshToken: token } });
        const allWord = 'AllWords'

        if (!userId) {
            return new Error("User id not found");
        }

        const userConcretCollection = await prisma.userCollections.findFirst({
            where: {
                UserId: userId.UserId,
                Name: wordType.IntermediateWWordCollectionName
            }
        });
        const userAllWordCollection = await prisma.userCollections.findFirst({
            where: {
                UserId: userId.UserId,
                Name: allWord,
            }
        });

        if (!userConcretCollection && !userConcretCollection) {
            return new Error("Userc collection not found");
        }

        const createWord = await prisma.userWords.create({
            data: {
                Word: wordType.Word,
                Translate: wordType.Translate,

                IntermediateWWordCollection: {
                    create: [
                        { UserColletion: userConcretCollection.Id, },
                        { UserColletion: userAllWordCollection!.Id },
                    ]
                },
            }
        });

        return createWord;
    }

    static editWord = async (id: string, word: string, translate: string) => {
        const findWord = await prisma.userWords.findFirst({ where: { Id: id } });

        if (!findWord) {
            return new Error("Word not found");
        }

        const updateWord = await prisma.userWords.update({
            where: { Id: id },
            data: {
                Word: word,
                Translate: translate,
                UpdateAt: new Date(),
            }
        });
        return updateWord;
    }

    static getAllWords = async (token: string) => {
        const userId = await prisma.tokenModels.findFirst({ where: { RefreshToken: token } });

        if (!userId) {
            return new Error("User not find");
        }

        const collectionAllId = await prisma.userCollections.findFirst({ where: { Name: "AllWords", UserId: userId.UserId } });

        const intermediateCollections = await prisma.intermediateWordsCollections.findMany({ where: { UserColletion: collectionAllId?.Id } });

        const words: any[] = [];
        for (const elem of intermediateCollections) {
            const word = await prisma.userWords.findFirst({ where: { Id: elem.UserWord } });
            words.push(word);
        };

        return words;
    }

    static getWordById = async (id: string) => {
        const word = await prisma.userWords.findFirst({ where: { Id: id } });
        return word;
    }

    static getWordByCategory = async (categoryName: string, token: string) => {
        const userId = await prisma.tokenModels.findFirst({ where: { RefreshToken: token } });

        if (!userId) {
            return new Error("User not find");
        }

        const collectionAllId = await prisma.userCollections.findFirst({ where: { Name: categoryName, UserId: userId.UserId } });

        const intermediateCollections = await prisma.intermediateWordsCollections.findMany({ where: { UserColletion: collectionAllId?.Id } });

        const words: any[] = [];
        for (const elem of intermediateCollections) {
            const word = await prisma.userWords.findFirst({ where: { Id: elem.UserWord } });
            words.push(word);
        };

        return words;
    }

    static deleteWordById = async (id: string) => {
        const intermmidiateId = await prisma.intermediateWordsCollections.findMany({ where: { UserWord: id } });

        for (let elem of intermmidiateId) {
            await prisma.intermediateWordsCollections.deleteMany({ where: { Id: elem.Id } });
        }
        const delWord = await prisma.userWords.delete({ where: { Id: id } });

        return delWord;
    }
}