import { PrismaClient } from "@prisma/client";
import { WordType } from '../types';

const prisma = new PrismaClient();

export default class WordService {
    static addWord = async (wordType: WordType, id: string) => {
        const userId = await prisma.users.findFirst({ where: { Id: id } });
        const allWord = 'AllWords'

        if (!userId) {
            return new Error("User id not found");
        }
        const userAllWordCollection = await prisma.userCollections.findFirst({
            where: {
                UserId: userId.Id,
                Name: allWord,
            }
        });

        if (wordType.IntermediateWWordCollectionName) {
            const userConcretCollection = await prisma.userCollections.findFirst({
                where: {
                    UserId: userId.Id,
                    Name: wordType.IntermediateWWordCollectionName
                }
            });

            if (!userConcretCollection) {
                return new Error("User collection not found");
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

        const createWord = await prisma.userWords.create({
            data: {
                Word: wordType.Word,
                Translate: wordType.Translate,

                IntermediateWWordCollection: {
                    create:
                        { UserColletion: userAllWordCollection!.Id },
                },
            }
        });

        return createWord;
    }

    static addCatToWord = async (wordId: string, categoryName: string) => {
        const categoryId = await prisma.userCollections.findFirst({ where: { Name: categoryName } });
        const wordID = await prisma.userWords.findFirst({ where: { Id: wordId } });

        if (!wordID && !categoryId) {
            return new Error("Not found wordId or category name");
        }

        const addCat = await prisma.intermediateWordsCollections.create({
            data: {
                UserWord: wordID!.Id,
                UserColletion: categoryId!.Id
            }
        });
        return addCat;
    }

    static serviceWordToUserCategory = async (word: string, uId: string) => {
        const serviceWord = await prisma.words.findFirst({ where: { UkrTranslate: word } });
        const userId = await prisma.users.findFirst({ where: { Id: uId } });
        const allWord = 'AllWords'

        if (!serviceWord || !userId) {
            return new Error("Service word or user not found");
        }

        const checkUserCat = await prisma.userCollections.findFirst({
            where: {
                UserId: userId.Id,
                Name: serviceWord.CollectionName
            }
        });

        const userAllWordsCat = await prisma.userCollections.findFirst({
            where: {
                UserId: userId.Id,
                Name: allWord
            }
        });

        const interMidiateAllWords = await prisma.intermediateWordsCollections.findMany({
            where: { UserColletion: userAllWordsCat?.Id }
        });

        for (const obj of interMidiateAllWords) {
            const userWords = await prisma.userWords.findFirst({ where: { Id: obj.UserWord } });

            const userWord = userWords?.Word;
            const servWord = serviceWord.UkrTranslate;
            if (userWord == servWord) {
                return new Error("User collection not found");
            }
        }

        if (checkUserCat) {
            const newWord = await prisma.userWords.create({
                data: {
                    Word: serviceWord?.UkrTranslate!,
                    Translate: serviceWord?.Word!,

                    IntermediateWWordCollection: {
                        create: [
                            { UserColletion: checkUserCat.Id },
                            { UserColletion: userAllWordsCat!.Id }
                        ]
                    }
                }
            });
            return newWord;
        }

        // Create new user category
        const newUserCat = await prisma.userCollections.create({
            data: {
                Name: serviceWord.CollectionName,
                UserId: userId.Id
            }
        });

        const newWord = await prisma.userWords.create({
            data: {
                Word: serviceWord?.UkrTranslate!,
                Translate: serviceWord?.Word!,

                IntermediateWWordCollection: {
                    create: [
                        { UserColletion: newUserCat.Id },
                        { UserColletion: userAllWordsCat!.Id }
                    ]
                }
            }
        });

        return newWord;
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

    static getAllWords = async (id: string) => {
        const userId = await prisma.users.findFirst({ where: { Id: id } });

        if (!userId) {
            return new Error("User not find");
        }

        const collectionAllId = await prisma.userCollections.findFirst({ where: { Name: "AllWords", UserId: userId.Id } });

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

    static getWordByCategory = async (categoryId: string) => {
        const collectionAllId = await prisma.userCollections.findFirst({ where: { Id: categoryId } });

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

    static getServiceWord = async () => {
        const allServiceWords = await prisma.words.findMany();

        return allServiceWords;
    }
}