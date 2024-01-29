import { Router } from "express";
import { CollectionWordsController } from "../controllers/collection-words-controller";

export const collectionWordsRouter = Router();

collectionWordsRouter.post('/create', CollectionWordsController.createCollection);

collectionWordsRouter.put('/update', CollectionWordsController.updateCollection);

collectionWordsRouter.get('/userCollections', CollectionWordsController.getAllCollections);

collectionWordsRouter.delete('/delete', CollectionWordsController.deleteCollection);