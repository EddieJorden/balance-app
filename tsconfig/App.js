"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const LandingPage_1 = __importDefault(require("./components/LandingPage"));
const UserProfileFetch_1 = __importDefault(require("./components/UserProfileFetch"));
function App() {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "App" }, { children: (0, jsx_runtime_1.jsxs)("header", Object.assign({ className: "App-header" }, { children: [(0, jsx_runtime_1.jsx)(LandingPage_1.default, {}), (0, jsx_runtime_1.jsx)(UserProfileFetch_1.default, {})] })) })));
}
exports.default = App;
