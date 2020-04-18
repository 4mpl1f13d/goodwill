import fetch from 'node-fetch';
import * as mysql from "mysql";
// import fs = require('fs');

import credentials from '../config/credentials';
//import google from '../google.json';
import { response } from 'express';
const fs = require('fs');

let google =  [] ; 

    // if (fs.existsSync('google.json')) {
      //  google = JSON.parse(fs.readFileSync('google.json'))
    //}

    fs.readFileSync('google.json', (data) => {
        console.log(data.maps_results.title)
    })

interface GooProps {
    title: String,
    address: String,
    phone:String
}


const search = () => {
    // Testing creds for google and FS
    // console.log(credentials.googleKey);

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

//Google JSON Fucntion Typescript Interface 


// import rest api data to create a new google records into mysql database
// const Query = (query: string, values?: any) => {

//     const sql = mysql.format(query, values);
//     console.log(sql);

//     return new Promise((resolve, reject) => {
//         pool.query(sql, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };


// Update googlefoo table with info from JSON
//  gZip(zip) JSON , title(gmaps_serp_loc1) JSON, address(gmaps_serp_add1), phone(gmaps_serp_ph1)
// const post = (title: string, address: string, phone: string) =>
//     Query(`
// INSERT INTO googlefoos (zip, gmaps_serp_loc1, gmaps_serp_add1, gmaps_serp_ph1) 
// VALUE (?, ? ,?);`, [title, address, phone]
//     );


export default {
    fullG_URL,
    search,
    //Query, 
    // post
}