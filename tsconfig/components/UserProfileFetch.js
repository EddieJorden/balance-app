"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const userSlice_1 = require("./userSlice");
function UserProfileFetch() {
    const enteredName = (0, react_redux_1.useSelector)(userSlice_1.selectUserName);
    const enteredEmail = (0, react_redux_1.useSelector)(userSlice_1.selectUserEmail);
    const localhost = `http://localhost:8888/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;
    // const liveUrl = `https://eddiejorden-tech-balance-back-end-main-kposozymga-wm.a.run.app/getUserProfile?enteredProfileName=${enteredName}&enteredProfileEmail=${enteredEmail}`;
    const dispatch = (0, react_redux_1.useDispatch)();
    fetch(localhost)
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error();
    })
        .then((data) => {
        dispatch((0, userSlice_1.updateFetchedUserProfile)(data));
    });
    return (0, jsx_runtime_1.jsx)("div", {});
}
exports.default = UserProfileFetch;
