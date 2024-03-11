import { Request, Response, NextFunction } from "express";
import { DataAnalysisUser } from "../services/data-analysis-user";

export class DataAnalysisController {
    static allData = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.id;
            const response = await DataAnalysisUser.dataAll(userId);

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
}