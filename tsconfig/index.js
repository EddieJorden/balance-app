"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const react_redux_1 = require("react-redux");
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const store_1 = require("./store");
const root = client_1.default.createRoot(document.getElementById('root'));
root.render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store_1.store }, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) })));
(0, reportWebVitals_1.default)();
