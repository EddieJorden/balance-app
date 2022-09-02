"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectFetchedUserProfileStatus = exports.selectFetchedUserProfileEmail = exports.selectFetchedUserProfileName = exports.selectFetchedUserProfile = exports.selectUserEmail = exports.selectUserName = exports.updateNewUserStatus = exports.updateFetchedUserProfile = exports.updateUserEmail = exports.updateUserName = exports.userSlice = void 0;
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
const toolkit_1 = require("@reduxjs/toolkit");
exports.userSlice = (0, toolkit_1.createSlice)({
    name: 'userName',
    initialState: {
        // username and email from user input
        userInputName: 'user name',
        userInputEmail: 'email@mail.com',
        // profile fetched from server
        fetchedUserProfile: {
            userName: '',
            userEmail: '',
            userStatus: '',
        },
        isNewUser: true,
    },
    reducers: {
        updateUserName(state, action) {
            state.userInputName = action.payload;
        },
        updateUserEmail(state, action) {
            state.userInputEmail = action.payload;
        },
        updateFetchedUserProfile(state, action) {
            const { userName, userEmail, userStatus } = action.payload;
            state.fetchedUserProfile = {
                userName,
                userEmail,
                userStatus,
            };
        },
        updateNewUserStatus(state, action) {
            state.isNewUser = action.payload;
        },
    },
});
// action creators
_a = exports.userSlice.actions, exports.updateUserName = _a.updateUserName, exports.updateUserEmail = _a.updateUserEmail, exports.updateFetchedUserProfile = _a.updateFetchedUserProfile, exports.updateNewUserStatus = _a.updateNewUserStatus;
// selectors
const selectUserName = (state) => state.userSlice.userInputName;
exports.selectUserName = selectUserName;
const selectUserEmail = (state) => state.userSlice.userInputEmail;
exports.selectUserEmail = selectUserEmail;
const selectFetchedUserProfile = (state) => state.userSlice.fetchedUserProfile;
exports.selectFetchedUserProfile = selectFetchedUserProfile;
const selectFetchedUserProfileName = (state) => state.userSlice.fetchedUserProfile.userName;
exports.selectFetchedUserProfileName = selectFetchedUserProfileName;
const selectFetchedUserProfileEmail = (state) => state.userSlice.fetchedUserProfile.userEmail;
exports.selectFetchedUserProfileEmail = selectFetchedUserProfileEmail;
const selectFetchedUserProfileStatus = (state) => state.userSlice.fetchedUserProfile.userStatus;
exports.selectFetchedUserProfileStatus = selectFetchedUserProfileStatus;
exports.default = exports.userSlice.reducer;
