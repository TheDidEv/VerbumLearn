import express from 'express';
import cors from 'cors';

require("dotenv").config({ path: __dirname + './../.env' });

const main = async () => {
    const PORT = process.env.PORT;
    const app = express();

    app.use(cors());

    app.listen(PORT, () => {
        console.log(`Server was start on port: ${PORT}`)
    });
}

main();