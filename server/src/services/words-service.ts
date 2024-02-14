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
        })

        if (!userConcretCollection) {
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
}