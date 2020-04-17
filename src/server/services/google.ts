// to do:
// - export data into json.

import fetch from 'node-fetch';

import fs = require('fs');
import credentials from '../config/credentials';
import { response } from 'express';

const search = () => {
    console.log(credentials.googleKey);
    
    // fetch(fullG_URL)
    //     .then(res => res.text())
    //     .then(body => write(body))
    //     .catch(err => console.log(err));
}

const write = (body) => {
    for (let i = 0; i < 1; i++) {
        fs.writeFile('google.json', body, () => { return });
    }
}

// // convert json to array of objects.
// // const results = Object.keys(data).map(key => {
// //     return {
// //         id: key,
// //     }
// // });


const
    // base url (points to ZENSERP get)
    baseURL: string = "https://app.zenserp.com/api/v2/search?",
    // the api call.
    gApi: string = "apikey=" + credentials.googleKey + "&",
    // keywords (search terms).
    keywords: string = "q=Thrift%20Store%20",
    // DB zip code call needed to poplulate varibale successfully
    gZip: string = "35222",
    //directions URL    
    // dirURL: string = "&directions=",
    //Address from directions from GMAPS SERP
    // dirAddy: string = "&directions.address_parsed", 
    // Queiontionable Address
    // quesAddy: string = "&address",
    //Some URL
    // someURL: string = "&url",
    //remainder string
    gRemString: string = "&tbm=lcl",

    // BASE concatentation
    //Added search strings  --- REM + dirAddy + dirURL  + quesAddy + someURL
    fullG_URL: string = baseURL + gApi + keywords + gZip + gRemString
    ;


//    //rest api to create a new customer record into mysql database
//     app.post('/customer', function (req, res) {
//        var params  = req.body;
//        console.log(params);
//        connection.query('INSERT INTO customer SET ?', params, function (error, results, fields) {
//           if (error) throw error;
//           res.end(JSON.stringify(results));
//         });
//     });


export default {
    fullG_URL,
    search,
}