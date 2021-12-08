"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteR = exports.patch = exports.put = exports.post = exports.get = exports.request = exports.HttpMethod = void 0;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
    HttpMethod["put"] = "PUT";
    HttpMethod["patch"] = "PATCH";
    HttpMethod["delete"] = "DELETE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
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
exports.request = request;
function get(url, action, error) {
    request(url, HttpMethod.get, {}, action, error);
}
exports.get = get;
function post(url, data, action, error) {
    request(url, HttpMethod.post, data, action, error);
}
exports.post = post;
function put(url, data, action, error) {
    request(url, HttpMethod.put, data, action, error);
}
exports.put = put;
function patch(url, data, action, error) {
    request(url, HttpMethod.patch, data, action, error);
}
exports.patch = patch;
function deleteR(url, action, error) {
    request(url, HttpMethod.delete, {}, action, error);
}
exports.deleteR = deleteR;
Number.prototype.isBigNumber = function () {
    return this > 100000;
};
function foo() {
    var aBigNumber = 1000000000;
    // Errors here TS2339: Property 'isBigNumber' does not exist on type 'number'.
    if (aBigNumber.isBigNumber()) {
        console.log("It's a big number!");
    }
}
foo();
