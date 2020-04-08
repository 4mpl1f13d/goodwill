// formed URL:
// base url
// operation-name: the API call, i.e. findCompleted Items
// service-version: API version
// security-appname: app id from ebay developers program
// response-data-format: we want JSON data
// rest-payload: required for URL request to separate payload from standard headers
// keywords: (payload)
// itemFilter(0) the first item filter, with a name:value pair
// itemFilter(1) second item filter with name:value pair
// itemFilter(2) third item filter with name:value pair
// paginationInput: entries per page (how many to return)

let ebaySearchCompletedURL: string =
    `https://svcs.ebay.com/services/search/FindingService/v1?
    OPERATION-NAME=findCompletedItems&
    SERVICE-VERSION=1.7.0&
    SECURITY-APPNAME=YourAppID&
    RESPONSE-DATA-FORMAT=JSON&
    REST-PAYLOAD&
    keywords=Garmin+nuvi+1300+Automotive+GPS+Receiver&categoryId=156955&
    itemFilter(0).name=Condition
    &itemFilter(0).value=3000&
    itemFilter(1).name=FreeShippingOnly&
    itemFilter(1).value=true&
    itemFilter(2).name=SoldItemsOnly&
    itemFilter(2).value=true&
    paginationInput.entriesPerPage=10`;