"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lodash_1 = require("lodash");
const react_redux_1 = require("react-redux");
const utils_1 = require("./utils");
const userSlice_1 = require("./userSlice");
function UserLogin() {
    const [name, setName] = (0, react_1.useState)('user name');
    const [email, setEmail] = (0, react_1.useState)('mail@email.com');
    const [emailIsValid, setEmailIsValid] = (0, react_1.useState)(false);
    const updateName = (e) => {
        setName(e.target.value);
    };
    const updateEmail = (e) => {
        const val = e.target.value;
        if (/^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(val)) {
            setEmailIsValid(true);
        }
        else {
            setEmailIsValid(false);
        }
        setEmail(e.target.value);
    };
    const dataToUpdate = { name, email };
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleClick = () => {
        const nameToSubmit = dataToUpdate.name;
        const emailToSubmit = dataToUpdate.email;
        if (nameToSubmit.length > 0 && emailToSubmit.length > 0) {
            dispatch((0, userSlice_1.updateUserName)(nameToSubmit));
            dispatch((0, userSlice_1.updateUserEmail)(emailToSubmit));
        }
        else {
            throw new Error('invalid name or email');
        }
    };
    const setEmailBorderColor = () => {
        const redBorder = '4px solid #E04643';
        const whiteBorder = '4px solid white';
        if (emailIsValid) {
            return whiteBorder;
        }
        return redBorder;
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { margin: '13px' } }, { children: [(0, jsx_runtime_1.jsx)(utils_1.FormInput, { placeHolder: name, changeHandler: (0, lodash_1.debounce)((e) => {
                    updateName(e);
                }, 1000) }), (0, jsx_runtime_1.jsx)(utils_1.FormInput, { placeHolder: email, changeHandler: (0, lodash_1.debounce)((e) => {
                    updateEmail(e);
                }, 1000), border: setEmailBorderColor() }), (0, jsx_runtime_1.jsx)("div", { children: emailIsValid ? ((0, jsx_runtime_1.jsx)(utils_1.FormSubmitButton, { buttonText: "Submit", onClickFunction: handleClick })) : ('please enter a valid user name and email') })] })));
}
exports.default = UserLogin;
