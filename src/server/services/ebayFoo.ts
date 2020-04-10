// to do:
// X name variable ebayFoo
// X store credentials in separate file, import, .gitignore exclude.
// - export data into json.

// import 'isomorphic-fetch';
// import 'es6-promise';
import credentials from '../config/credentials';

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

// fetch(fullURL);

export default {
    fullURL,
}