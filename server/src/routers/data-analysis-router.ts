import { Router } from "express";
import { DataAnalysisController } from "../controllers/data-analysis-controller";

export const dataAnalysus = Router();

dataAnalysus.get('/allData/:id', DataAnalysisController.allData);
