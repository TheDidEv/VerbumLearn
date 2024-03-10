import { Response, Request, NextFunction } from "express";
import QuizService from "../services/quiz-service";

export class QuizController {
    static async getQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, CollName } = req.body;
            const response = await QuizService.getQuiz(userId, CollName);

            res.status(200).json(response);
        }
        catch (error) {
            next(error);
        }
    }

    static async updateQuiz(req: Request, res: Response, next: NextFunction) {
        try {
            const { wordId, answer } = req.body;
            const response = await QuizService.updateQuizData(wordId, answer);

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
}