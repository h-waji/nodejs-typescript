"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express'); // => CommonJSの構文
const express_1 = __importDefault(require("express")); // => ESモジュールの構文
const app = (0, express_1.default)();
app.listen(3000);
