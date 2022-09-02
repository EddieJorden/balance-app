"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledContainer = styled_components_1.default.div `
  background-color: #3e505c;
  padding: 40px;
  border-radius: 10px;
  font-weight: heavy;
  width: 300px;
  height: 180px;
  margin: 73px;
`;
exports.default = StyledContainer;
