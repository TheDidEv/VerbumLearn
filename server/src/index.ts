import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRouter } from './routers/user-router';

import { PrismaClient } from '@prisma/client';
import { Words } from './words_db';
import { collectionWordsRouter } from './routers/collection-router';
import { wordRouter } from './routers/word-route';
import { quizRouter } from './routers/quiz-router';
import { dataAnalysus } from './routers/data-analysis-router';

import { Request, Response, NextFunction } from 'express';

require("dotenv").config({ path: __dirname + './../.env' });

const main = async () => {
    const prisma = new PrismaClient();
    await prisma.words.deleteMany();
    for (const elem of Words) {
        await prisma.words.create({
            data: {
                Word: elem.Word,
                UkrTranslate: elem.UkrTranslate,
                CollectionName: elem.CollectionName
            }
        });
    }

    const PORT = process.env.PORT;
    const app = express();

    const corsOptions = {
        origin: '*',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    }
    app.use(cors(corsOptions));
    app.use(cookieParser())
    app.use(express.json())
    app.use(function (req: Request, res: Response, next: NextFunction) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT,DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
    });

    app.use('/user', userRouter);
    app.use('/collectionWords', collectionWordsRouter);
    app.use('/words', wordRouter);
    app.use('/quiz', quizRouter);
    app.use('/data', dataAnalysus);

    app.listen(PORT, () => {
        console.log(`Server was start on port: ${PORT}`)
    });
}

main();