"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
    HttpMethod["put"] = "PUT";
    HttpMethod["patch"] = "PATCH";
    HttpMethod["delete"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
function request(url, method, data, action, error) {
    if (url === void 0) { url = ""; }
    fetch(url, {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    }).then(function (response) { return response.json(); }).then(function (data) { return action(data); }).catch((function (e) { return error(e); }));
}
function get(url, action, error) {
    request(url, HttpMethod.get, {}, action, error);
}
function post(url, data, action, error) {
    request(url, HttpMethod.post, data, action, error);
}
function put(url, data, action, error) {
    request(url, HttpMethod.put, data, action, error);
}
function patch(url, data, action, error) {
    request(url, HttpMethod.patch, data, action, error);
}
function deleteR(url, action, error) {
    request(url, HttpMethod.delete, {}, action, error);
}
exports.default = { HttpMethod: HttpMethod, request: request, get: get, post: post, put: put, patch: patch, deleteR: deleteR };
