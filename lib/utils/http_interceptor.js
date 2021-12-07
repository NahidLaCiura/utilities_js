"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteR = exports.patch = exports.put = exports.post = exports.get = exports.request = exports.HttpMethod = void 0;
const data_1 = require("./data");
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
    HttpMethod["put"] = "PUT";
    HttpMethod["patch"] = "PATCH";
    HttpMethod["delete"] = "DELETE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
function request(url = "", method, data, action, error, headers = new Headers()) {
    headers === null || headers === void 0 ? void 0 : headers.append('Content-Type', 'application/json');
    headers === null || headers === void 0 ? void 0 : headers.append('Authorization', (0, data_1.getData)(Constants.token));
    fetch(url, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => action(data)).catch((e => error(e)));
}
exports.request = request;
function get(url, action, error, headers = new Headers()) {
    request(url, HttpMethod.get, {}, action, error);
}
exports.get = get;
function post(url, data, action, error, headers = new Headers()) {
    request(url, HttpMethod.post, data, action, error);
}
exports.post = post;
function put(url, data, action, error, headers = new Headers()) {
    request(url, HttpMethod.put, data, action, error);
}
exports.put = put;
function patch(url, data, action, error, headers = new Headers()) {
    request(url, HttpMethod.patch, data, action, error);
}
exports.patch = patch;
function deleteR(url, action, error, headers = new Headers()) {
    request(url, HttpMethod.delete, {}, action, error);
}
exports.deleteR = deleteR;
