"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const userSlice_1 = require("./userSlice");
function Welcome() {
    const profile = (0, react_redux_1.useSelector)(userSlice_1.selectFetchedUserProfile);
    const newUser = (0, react_redux_1.useSelector)(userSlice_1.selectFetchedUserProfileStatus);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h1", { children: newUser === 'existing user'
                ? `Welcome back ${profile.userName}`
                : 'Welcome to Balance App' }) }));
}
exports.default = Welcome;
