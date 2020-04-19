
import fetch from 'node-fetch';
import * as mysql from "mysql";
// import fs = require('fs');
import UID from './uid';
import credentials from '../config/credentials';
import { response } from 'express';
const fs = require('fs');
const ebayUID = UID;

// Test Write data to ebay.JSON
// const search = () => {
//     fetch(fullURL)
//         .then(res => res.text())
//         .then(body => write(body))
//         .catch(err => console.log(err));
// }

// const write = (body) => {
//     for (let i = 0; i < 1; i++) {
//         fs.writeFile('ebay.json', body, () => { return });
//     }
// }


// MySQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: credentials.mysql.user,
    password: credentials.mysql.password,
    database: credentials.mysql.database
});

// import rest api data to create a new google records into mysql database - Update ebayfoos table
export const searchEbay = () => {
    // Testing creds for google and FS
    // console.log(credentials.googleKey);

    fetch(fullE_URL)
        .then(res => res.json())
        .then(body => {
            // console.log(body);

            console.log(body.findCompletedItemsResponse.ack.json());
            
            // body.findCompletedItemsResponse.searchResult.item.forEach(element => {
            //     // DB info on top, JSON table info on bottom
            //     connection.query(`insert into ebayfoos(searchid, keywords, grade, marketvalue, galleryURL) values
            //     (?, ?, ?, ?, ?)`, [ebayUID, keywords, element.condition.conditionId, element.sellingStatus.convertedCurrentPrice.__value__, element.galleryURL], function (error, results, fields) {
            //         if (error) throw error;
            //     });
            // });
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
    // hard-coded condition.
    condition: number = 3000,
    // base url (points to ebay get).
    baseURL: string = "https://svcs.ebay.com/services/search/FindingService/v1?",
    // the api call.
    opName: string = "OPERATION-NAME=" + "findCompletedItems" + "&",
    // api version to use.
    serVers: string = "SERVICE-VERSION=" + "1.7.0" + "&",
    // import credentials stored securely server-side and excluded from git.
    appName: string = "SECURITY-APPNAME=" + credentials.ebayKey + "&",
    // specify json for returned data.
    dataFormat: string = "RESPONSE-DATA-FORMAT=" + "JSON" + "&",
    // payload:
    payload: string = "REST-PAYLOAD" + "&",
    // keywords (search terms).
    keywords: string = "keywords=" + "hp dv7-6b55 laptop" + "&",
    // item filters.
    itemFilter0: string = "itemFilter(0)" + ".name=" + "SoldItemsOnly" + "&" + "itemFilter(0)" + ".value=" + "true" + "&",
    itemFilter1: string = "itemFilter(1)" + ".name=" + "Condition" + "&" + "itemFilter(1)" + ".value=" + condition + "&",
    // number of results to return.
    pagination: string = "paginationInput" + ".entriesPerPage=" + "5" + "&",
    // how to sort.
    sortOrder: string = "sortOrder=" + "CurrentPriceHighest",
    // concatenation.
    headers: string = opName + serVers + appName + dataFormat,
    fullPayload = payload + keywords + itemFilter0 + itemFilter1 + pagination + sortOrder,
    fullE_URL: string = baseURL + headers + fullPayload;



// export default {
//     fullE_URL,
//     search,
// }