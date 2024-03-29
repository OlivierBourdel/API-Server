/////////////////////////////////////////////////////////////////////
// Thid module exports small general usefull functions for :
// - path parsing
// - querystring manipulations
// - time conversion
/////////////////////////////////////////////////////////////////////
// Author : Nicolas Chourot
// Lionel-Groulx College
/////////////////////////////////////////////////////////////////////

const queryStringParser = require('query-string');

exports.capitalizeFirstLetter = capitalizeFirstLetter;
function capitalizeFirstLetter(s) {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}
exports.nowInSeconds = () => {
    const now = new Date();
    return Math.round(now.getTime() / 1000);
}
exports.deleteByIndex = (array, indexToDelete) => {
    for (let i = indexToDelete.length - 1; i >= 0; i--) {
        array.splice(indexToDelete[i], 1);
    }
}
exports.removeQueryString = removeQueryString;
function removeQueryString(url) {
    let queryStringMarkerPos = url.indexOf('?');
    if (queryStringMarkerPos > -1)
        url = url.substr(0, url.indexOf('?'));
    return url;
}
exports.getQueryString = getQueryString;
function getQueryString(url) {
    if (url.indexOf('?') > -1)
        return url.substring(url.indexOf('?'), url.length);
    return undefined;
}
exports.secondsToDateString = secondsToDateString;
function secondsToDateString(dateInSeconds, localizationId = 'fr-FR') {
    const hoursOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateInSeconds * 1000).toLocaleDateString(localizationId, hoursOptions);
}

exports.isNullOrEmpty = isNullOrEmpty;
function isNullOrEmpty(string){
    return string == null || string == "" || string == undefined;
}

/////////////////////////////////////////////////////////////////////
// this function decompose url path
// either
// MVC pattern /controller/action/id?querystring
// or
// API pattern /api/model/id?querystring
/////////////////////////////////////////////////////////////////////
exports.decomposePath = (url) => {
    let isAPI = false;
    let model = undefined;
    let controllerName = undefined;
    let action = undefined;
    let id = undefined;
    let params = null;

    let queryString = getQueryString(url);
    if (queryString != undefined)
        params = queryStringParser.parse(queryString);
    let path = removeQueryString(url).toLowerCase();

    if (path.indexOf('/api') > -1) {
        isAPI = true;
        path = path.replace('/api', '')
    }

    let urlParts = path.split("/");

    if (urlParts[1] != undefined) {
        model = urlParts[1];
        controllerName = capitalizeFirstLetter(model) + 'Controller';
    }

    if (!isAPI) {
        if (urlParts[2] != undefined && urlParts[2] != '')
            action = urlParts[2];
        else
            action = 'index';

        if (urlParts[3] != undefined) {
            id = parseInt(urlParts[3]);
        }
    } else {
        if (urlParts[2] != undefined) {
            id = parseInt(urlParts[2]);
        }
    }
    return { isAPI, model, controllerName, action, id, queryString, params };
}
