"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const userSlice_1 = require("./userSlice");
const ComponentContainer_1 = __importDefault(require("./ComponentContainer"));
function UserProfile() {
    const userName = (0, react_redux_1.useSelector)(userSlice_1.selectFetchedUserProfileName);
    const userEmail = (0, react_redux_1.useSelector)(userSlice_1.selectFetchedUserProfileEmail);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(ComponentContainer_1.default, { children: [(0, jsx_runtime_1.jsx)("div", { children: userName || 'loading...' }), (0, jsx_runtime_1.jsx)("div", { children: userEmail || 'loading...' })] }) }));
}
exports.default = UserProfile;
