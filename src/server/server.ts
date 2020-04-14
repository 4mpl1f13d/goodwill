<<<<<<< HEAD
import * as express from "express";
import apiRouter from "./routes";

const app = express();

app.use(express.static("public"));
app.use(apiRouter);
=======
// apiRouter commented out. not needed unless we implement auth.

import * as express from 'express';
// import apiRouter from './routes';
import ebay from "./services/ebay";

const app = express();

app.use(express.static('public'));
// app.use(apiRouter);
app.use(express.json());
>>>>>>> b605109adebb3a7cc32e4f6c572644953e944e78

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));