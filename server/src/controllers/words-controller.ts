import { NextFunction, Request, Response } from "express";
import WordService from "../services/words-service";
import { WordType } from "../types";


export class WordController {
    static addWord = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.refreshToken;
            const data: WordType = req.body;
            console.log(data)
            const createWord = await WordService.addWord(data, token);

            res.status(200).json(createWord);
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


    static getByCategoryWords = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            next(error);
        }
    }


    static getWord = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            next(error);
        }
    }


    static deleteWord = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error) {
            next(error);
        }
    }
}