// apiRouter commented out. not needed unless we implement auth.

import * as express from 'express';
// import apiRouter from './routes';
import ebay from "./services/ebay";
import google from "./services/google";

const app = express();

app.use(express.static('public'));
// app.use(apiRouter);
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

//Execute the Google GMAP SERPs search
// google.search();

//POST JSON to don8tr DB
// google.post();