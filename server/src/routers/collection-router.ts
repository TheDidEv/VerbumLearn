import { Router } from "express";
import { CollectionWordsController } from "../controllers/collection-controller";
import { checkAuth } from "../middlewares/auth-middleware";

export const collectionWordsRouter = Router();

collectionWordsRouter.post('/create',  CollectionWordsController.createCollection);

collectionWordsRouter.put('/update',  CollectionWordsController.updateCollection);

collectionWordsRouter.get('/userCollections/:id',  CollectionWordsController.getAllCollections);

collectionWordsRouter.delete('/delete/:id',  CollectionWordsController.deleteCollection);