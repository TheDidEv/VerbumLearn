import { NextFunction, Request, Response } from "express";
import WordService from "../services/words-service";
import { WordType } from "../types";


export class WordController {
    static addWord = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.refreshToken;
            const data: WordType = req.body;

            const createWord = await WordService.addWord(data, token);

            res.status(201).json(createWord);
        } catch (error) {
            next(error);
        }
    }

    static addCategoryToWord = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { wordId, categoryName } = req.body;
            const data = await WordService.addCatToWord(wordId, categoryName)

            res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    }

    static serviceWordToUserCat = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { wordId, userId } = req.body;
            const data = WordService.serviceWordToUserCategory(wordId, userId)

            res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    }

    static editWord = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const { word, translate } = req.body;

            const edit = await WordService.editWord(id, word, translate);
            res.status(200).json(edit);
        } catch (error) {
            next(error);
        }
    }

    static getAllWords = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.refreshToken;
            const data = await WordService.getAllWords(token);
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static getWord = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const wordId = req.params.id
            const data = await WordService.getWordById(wordId);
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static getByCategoryWords = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.refreshToken;
            const categoryName = req.body;
            const data = await WordService.getWordByCategory(categoryName, token);

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static deleteWord = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const wordId = req.params.id;
            const data = await WordService.deleteWordById(wordId);

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static getAllServiceWords = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await WordService.getServiceWord();

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }
}