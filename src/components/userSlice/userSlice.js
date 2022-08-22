import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userName",
  initialState: {
    //username and email from user input
    userInputName: "user name",
    userInputEmail: "email@mail.com",
    //profile fetched from server
    fetchedUserProfile: {
      userName: "",
      userEmail: "",
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
      const { userName, userEmail } = action.payload;
      state.fetchedUserProfile = {
        userName,
        userEmail,
      };
    },
    updateNewUserStatus(state, action) {
      state.isNewUser = action.payload;
    },
  },
});

//action creators
export const {
  updateUserName,
  updateUserEmail,
  updateFetchedUserProfile,
  updateNewUserStatus,
} = userSlice.actions;

//selectors
export const selectUserName = (state) => {
  return state.userSlice.userInputName;
};

export const selectUserEmail = (state) => {
  return state.userSlice.userInputEmail;
};

export const selectFetchedUserProfile = (state) => {
  return state.userSlice.fetchedUserProfile;
};

export const selectFetchedUserProfileName = (state) => {
  return state.userSlice.fetchedUserProfile.userName;
};

export const selectFetchedUserProfileEmail = (state) => {
  return state.userSlice.fetchedUserProfile.userEmail;
};

export const isNewUser = (state) => {
  return state.userSlice.isNewUser;
};

export default userSlice.reducer;
