import { Request, Response, NextFunction } from "express";
import CollectionWords from "../services/collection-service";

export class CollectionWordsController {
    static async createCollection(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, name } = req.body;
            const newCollection = await CollectionWords.createCollection(userId, name);
            return res.json(newCollection);
        } catch (error) {
            next(error);
        }
    }

    static async updateCollection(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, newName } = req.body;
            const updateCollection = await CollectionWords.updateCollection(id, newName);
            return res.json(updateCollection);
        } catch (error) {
            next(error);
        }
    }

    static async getAllCollections(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.id;
            const allUserCollections = await CollectionWords.getAllCollections(userId);
            return res.json(allUserCollections);
        } catch (error) {
            next(error);
        }
    }

    static async deleteCollection(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const deleteCol = await CollectionWords.deleteCollection(id);
            return res.json(deleteCol)
        } catch (error) {
            next(error);
        }
    }
}