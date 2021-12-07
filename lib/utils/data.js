"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getString = exports.getData = exports.setData = void 0;
function setData(key, value) { localStorage.setItem(key, value); }
exports.setData = setData;
function getData(key) { return localStorage.getItem(key); }
exports.getData = getData;
function getString(key) { return localStorage.getItem(key); }
exports.getString = getString;
