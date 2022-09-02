"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default */
const toolkit_1 = require("@reduxjs/toolkit");
const userSlice_1 = __importDefault(require("./components/userSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        userSlice: userSlice_1.default,
    },
});
