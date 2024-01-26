import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRouter } from './routers/user-router';

import { PrismaClient } from '@prisma/client';
import { Words } from './words_db';

require("dotenv").config({ path: __dirname + './../.env' });

const main = async () => {
    const prisma = new PrismaClient();
    await prisma.words.deleteMany();
    Words.map(async (elem) => {
        await prisma.words.create({
            data: {
                Word: elem.Word,
                UkrTranslate: elem.UkrTranslate,
                CollectionName: elem.CollectionName
            }
        });
    });

    const PORT = process.env.PORT;
    const app = express();

    app.use(cors());
    app.use(cookieParser())
    app.use(express.json())

    app.use('/user', userRouter);

    app.listen(PORT, () => {
        console.log(`Server was start on port: ${PORT}`)
    });
}

main();