"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormInput = exports.FormSubmitButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const prop_types_1 = __importDefault(require("prop-types"));
// Form submit button
const StyledFormSubmitButton = styled_components_1.default.div `
  background-color: white;
  color: blue;
  border-radius: 3px;
  margin: 13px;
  padding: 3px;
  cursor: pointer;
`;
function FormSubmitButton({ onClickFunction, buttonText, }) {
    return ((0, jsx_runtime_1.jsx)(StyledFormSubmitButton, Object.assign({ onClick: onClickFunction }, { children: buttonText })));
}
exports.FormSubmitButton = FormSubmitButton;
FormSubmitButton.defaultProps = {
    buttonText: 'click',
    onClickFunction: () => { },
};
FormSubmitButton.propTypes = {
    buttonText: prop_types_1.default.string,
    onClickFunction: prop_types_1.default.func,
};
function FormInput({ placeholder, changeHandler, border, }) {
    return ((0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: placeholder, onChange: changeHandler, style: {
            border,
            borderRadius: '3px',
            margin: '6px',
            cursor: 'pointer',
            height: '33px',
            width: '260px',
            fontSize: '18px',
        } }));
}
exports.FormInput = FormInput;
FormInput.defaultProps = {
    placeholder: 'default value',
    changeHandler: () => { },
    border: 'none',
};
FormInput.propTypes = {
    placeholder: prop_types_1.default.string,
    changeHandler: prop_types_1.default.func,
    border: prop_types_1.default.string,
};
