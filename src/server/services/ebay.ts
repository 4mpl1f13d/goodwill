import fetch from 'node-fetch';
import * as mysql from "mysql";
import UID from './uid';
import credentials from '../config/credentials';
const fs = require('fs');

export const ebayUID = UID;

// Test Write data to ebay.JSON
export const jsonEbay = () => {
    fetch(fullE_URL)
        .then(res => res.text())
        .then(body => writeEbay(body))
        .catch(err => console.log(err));
}
const writeEbay = (body) => {
    for (let i = 0; i < 1; i++) {
        fs.writeFile('ebay.json', body, () => { return });
    }
}

// MySQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: credentials.mysql.user,
    password: credentials.mysql.password,
    database: credentials.mysql.database
});

// import rest api data to create a new google records into mysql database - Update ebayfoos table
export const searchEbay = () => { 
    fetch(fullE_URL)
        .then(res => res.json())
        .then(body => {
            const itemCount= body.findCompletedItemsResponse[0].paginationOutput[0].totalEntries;
            console.log(itemCount);
            // console.log(body);
            body.findCompletedItemsResponse[0].searchResult[0].item.forEach(element => {
                // DB info on top, JSON table info on bottom
                connection.query(`insert into ebayfoos(searchid, keywords, grade, marketvalue, itemcount, galleryURL) values
                (?, ?, ?, ?, ?, ?)`, [ebayUID, keywords, element.condition[0].conditionId, element.sellingStatus[0].convertedCurrentPrice[0].__value__, itemCount, element.galleryURL[0]], function (error, results, fields) {
                    if (error) throw error;
                });
            });
        })
        .catch(err => console.log(err));
}

const
    // hard-coded condition 1000 New | 3000 Used | 7000 Broke
    condition: number = 1000,
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
    // keywords (search terms). --  Used  / hp dv7-6b55 laptop / New Balance MX517v1 / corsair k95 rgb keyboard rgp0056 / Vizio D24h-C1
    keywords: string = "keywords=" + "corsair k95 rgb keyboard" + "&",
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

// exports.
export default {
    fullE_URL,
    jsonEbay,
    searchEbay,
}

// TESTING
// convert json to array of objects.
// const results = Object.keys(data).map(key => {
//     return {
//         id: key,
//     }
// });