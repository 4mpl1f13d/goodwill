// to do:
// - export data into json.

import fetch from 'node-fetch';

import fs = require('fs');
import credentials from '../config/credentials';
import { response } from 'express';

const search = () => {
    fetch(fullURL)
        .then(res => res.text())
        .then(body => write(body))
        .catch(err => console.log(err));
}

const write = (body) => {
    for (let i = 0; i < 1; i++) {
        fs.writeFile('ebay.json', body, () => { return });
    }
}

// convert json to array of objects.
// const results = Object.keys(data).map(key => {
//     return {
//         id: key,
//     }
// });

const
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
    // concatentation.
    headers: string = opName + serVers + appName + dataFormat,
    fullPayload = payload + keywords + itemFilter0 + itemFilter1 + pagination + sortOrder,
    fullURL: string = baseURL + headers + fullPayload
    ;



export default {
    fullURL,
    search,
}