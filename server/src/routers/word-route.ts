import { Router } from "express";
import { WordController } from "../controllers/words-controller";

export const wordRouter = Router();

wordRouter.post('/addWord', WordController.addWord);

wordRouter.put('/editWord/:id', WordController.editWord);

wordRouter.get('/getAllWords', WordController.getAllWords);

wordRouter.get('/getWord', WordController.getWord);

wordRouter.get('/getByCategory/:nameCategory', WordController.getByCategoryWords);

wordRouter.delete('/deleteWord/:id', WordController.deleteWord);