/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
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
      userTasks: 'default tasks',
    },
    isNewUser: true,
    displayedContent: 'user login',
  },
  reducers: {
    updateUserName(state, action) {
      state.userInputName = action.payload;
    },
    updateUserEmail(state, action) {
      state.userInputEmail = action.payload;
    },
    updateFetchedUserProfile(state, action) {
      const {
        userName, userEmail, userStatus, userTasks,
      } = action.payload;
      state.fetchedUserProfile = {
        userName,
        userEmail,
        userStatus,
        userTasks,
      };
      state.isNewUser = false;
    },
    updateNewUserStatus(state, action) {
      state.isNewUser = action.payload;
    },
  },
});

// action creators
export const {
  updateUserName,
  updateUserEmail,
  updateFetchedUserProfile,
  updateNewUserStatus,
} = userSlice.actions;

// selectors
export const selectUserName = (state: any) => state.userSlice.userInputName;

export const selectUserEmail = (state: any) => state.userSlice.userInputEmail;

export const selectFetchedUserProfile = (state: any) =>
  state.userSlice.fetchedUserProfile;

export const selectFetchedUserProfileName = (state: any) =>
  state.userSlice.fetchedUserProfile.userName;

export const selectFetchedUserProfileEmail = (state: any) =>
  state.userSlice.fetchedUserProfile.userEmail;

export const selectFetchedUserProfileStatus = (state: any) =>
  state.userSlice.fetchedUserProfile.userStatus;

export const selectIsNewUser = (state: any) =>
  state.userSlice.isNewUser;

export const selectUserTasks = (state: any) =>
  state.userSlice.fetchedUserProfile.userTasks;

export default userSlice.reducer;
