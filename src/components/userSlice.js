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
      userStatus: "",
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

//action creators
export const {
  updateUserName,
  updateUserEmail,
  updateFetchedUserProfile,
  updateNewUserStatus,
} = userSlice.actions;

// interface UserSlice {
//   userInputName: string;
//   userInputEmail: string;
// }

// interface State {
//   userSlice: UserSlice;
// }

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

export const selectFetchedUserProfileStatus = (state) => {
  return state.userSlice.fetchedUserProfile.userStatus;
};

export default userSlice.reducer;
