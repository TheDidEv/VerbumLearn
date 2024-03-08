import { Router } from "express";
import { CollectionWordsController } from "../controllers/collection-controller";
import { checkAuth } from "../middlewares/auth-middleware";

export const collectionWordsRouter = Router();

collectionWordsRouter.post('/create', checkAuth, CollectionWordsController.createCollection);

collectionWordsRouter.put('/update', checkAuth, CollectionWordsController.updateCollection);

collectionWordsRouter.get('/userCollections/:id', checkAuth, CollectionWordsController.getAllCollections);

collectionWordsRouter.delete('/delete/:id', checkAuth, CollectionWordsController.deleteCollection);