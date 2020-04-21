import * as express from 'express';
import * as  google from './services/google';
import * as  ebay from './services/ebay';


const router = express.Router();

router.get('/hello', (req, res, next) => {
    res.json('Goodwill');
});

//Google JSON API Test search function....
router.get('/googleTest', (req, res) => {
    res.send(google.searchGoogle());
});


//Ebay JSON API Test search function....
router.get('/ebayTest', (req, res) => {
    res.send(ebay.searchEbay());
    // Test results...
    // res.send(ebay.jsonEbay());
});

export default router;