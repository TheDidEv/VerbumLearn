import { Router } from "express";
import { DataAnalysisController } from "../controllers/data-analysis-controller";

export const dataAnalysus = Router();

dataAnalysus.get('/allData/:id', DataAnalysisController.allData);

dataAnalysus.get('/wordsAnalysisByDate', DataAnalysisController.wordByDate);

dataAnalysus.post('/wordsAnalysisByTwoDate', DataAnalysisController.wordByTwoDate);
