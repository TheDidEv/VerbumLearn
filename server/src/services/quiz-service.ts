import { PrismaClient } from "@prisma/client";
import { MainWord, WrongWords } from "../types";

const prisma = new PrismaClient();

function updateStatus(curentWord: number) {
    if (curentWord >= 4) return "WRONG";
    else if (curentWord < 4 && curentWord > 0) return "MID";
    else if (curentWord === 0) return "LERNED";
    return "WRONG";
}

export default class QuizService {
    static async getQuiz(userId: string, quizName: string) {
        const userCollection = await prisma.userCollections.findFirst({
            where: {
                Name: quizName,
                UserId: userId
            }
        });

        if (!userCollection) {
            return new Error("Collection not found");
        }

        const intermidiateCollection = await prisma.intermediateWordsCollections.findMany({
            where: { UserColletion: userCollection.Id }
        });

        if (!intermidiateCollection) {
            return new Error("Words in collection not found");
        }

        const wordByColl: any = []

        for (const elem of intermidiateCollection) {
            const word = await prisma.userWords.findFirst({
                where: { Id: elem.UserWord }
            });
            wordByColl.push(word);
        }

        // Make object for quiz
        const findMainWord = Math.floor(Math.random() * wordByColl.length)
        const mainWord: MainWord = {
            Id: wordByColl[findMainWord].Id,
            Word: wordByColl[findMainWord].Word,
            Translate: wordByColl[findMainWord].Translate,
        };

        const wrongWordsArr: WrongWords[] = []

        for (let i = 0; i < 3; i++) {
            const findMainWord = Math.floor(Math.random() * wordByColl.length)
            wrongWordsArr.push(
                {
                    Word: wordByColl[findMainWord].Word,
                    Translate: wordByColl[findMainWord].Translate,
                });
        }

        const finalArr = [mainWord, ...wrongWordsArr]
        return finalArr;
    }

    static updateQuizData = async (wordId: string, answer: boolean, email: string) => {
        let word = await prisma.userWords.findFirst({ where: { Id: wordId } });
        let checkStatus = 0

        if (!word) {
            return new Error("Not found word");
        }

        if (word.Priority > 0) {
            checkStatus = 1;
        }
        else {
            checkStatus = 0;
        }

        if (answer === false) {
            const newStatus = updateStatus(word.Priority + checkStatus);
            word = await prisma.userWords.update({
                where: {
                    Id: word.Id
                },
                data: {
                    Priority: word.Priority + checkStatus,
                    Status: newStatus,
                }
            });
        }
        else if (answer === true) {
            const newStatus = updateStatus(word.Priority - checkStatus);
            word = await prisma.userWords.update({
                where: {
                    Id: word.Id
                },
                data: {
                    Priority: word.Priority - checkStatus,
                    Status: newStatus,
                }
            });
        }

        await prisma.userLogs.create({ data: { Email: email } });

        return word;
    }
} 