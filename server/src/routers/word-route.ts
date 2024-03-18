import { Router } from "express";
import { WordController } from "../controllers/words-controller";
import { checkAuth } from "../middlewares/auth-middleware";
import { checkActivated } from "../middlewares/activated-middleware";

export const wordRouter = Router();

wordRouter.post('/addWord', WordController.addWord);

wordRouter.post('/addCategoryToWord', WordController.addCategoryToWord);

wordRouter.post('/serviceWordToUserCat', WordController.serviceWordToUserCat)

wordRouter.put('/editWord/:id', WordController.editWord);

wordRouter.get('/getAllWords/:id', WordController.getAllWords);

wordRouter.get('/getWord/:id', checkAuth, WordController.getWord);

wordRouter.get('/getByCategory/:catId', WordController.getByCategoryWords);

wordRouter.get('/getAllServiceWords', WordController.getAllServiceWords);

wordRouter.delete('/deleteWord/:id', WordController.deleteWord);