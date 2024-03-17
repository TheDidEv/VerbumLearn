import { Router } from "express";
import { QuizController } from "../controllers/quiz-controller";

export const quizRouter = Router();

quizRouter.post('/getQuiz', QuizController.getQuiz);

quizRouter.put('/updateQuizData', QuizController.updateQuiz);