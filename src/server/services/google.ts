import fetch from 'node-fetch';
import * as mysql from "mysql";
// import fs = require('fs');
import UID from './uid';
import credentials from '../config/credentials';
import { response } from 'express';
const fs = require('fs');

export const googleUID = UID;

// Test Write data to google.JSON
export const jsonGoogle = () => {
    fetch(fullG_URL)
        .then(res => res.text())
        .then(body => write(body))
        .catch(err => console.log(err));
}

const write = (body) => {
    for (let i = 0; i < 1; i++) {
        fs.writeFile('google.json', body, () => { return });
    }
}

// MySQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: credentials.mysql.user,
    password: credentials.mysql.password,
    database: credentials.mysql.database
});

// import rest api data to create a new google records into mysql database - Update googlefoo table
export const searchGoogle = () => {
    // Testing creds for google and FS
    // console.log(credentials.googleKey);

    fetch(fullG_URL)
        .then(res => res.json())
        .then(body => {
            //console.log(body);
            body.maps_results.forEach(element => {
                // DB info on top, JSON table info on bottom
                connection.query(`insert into googlefoos(zip, searchid, gmaps_serp_loc1, gmaps_serp_add1, gmaps_serp_ph1 ) values(?, ?, ?, ?, ? )`, [gZip, googleUID, element.title, element.address, element.phone], function (error, results, fields) {
                    if (error) throw error;
                });
            });
        })
        .catch(err => console.log(err));
}

// TESTING
// convert json to array of objects.
// const results = Object.keys(data).map(key => {
//     return {
//         id: key,
//     }
// });

export const
    // base url (points to ZENSERP get)
    baseURL: string = "https://app.zenserp.com/api/v2/search?",
    // the api call.
    gApi: string = "apikey=" + credentials.googleKey + "&",
    // keywords (search terms).
    keywords: string = "q=Thrift%20Store%20",
    // DB zip code call needed to populate variable successfully -- used 35222 / 35117 / 35173 / 35005
    gZip: string = "35005",
    // // directions URL    
    // dirURL: string = "&directions=",
    // //Address from directions from GMAPS SERP
    // dirAddy: string = "&directions.address_parsed", 
    // // Questionable Address
    // quesAddy: string = "&address",
    // //Some URL
    // someURL: string = "&url",
    //remainder string
    gRemString: string = "&tbm=lcl",

    // BASE concatenation
    //Added search strings  --- REM + dirAddy + dirURL  + quesAddy + someURL
    fullG_URL: string = baseURL + gApi + keywords + gZip + gRemString;


// export default {
//     fullG_URL,
//     searchGoogle,
// }