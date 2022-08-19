import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userName",
  initialState: {
    //username and email from user input
    userInputName: "no name selected",
    userInputEmail: "no email entered",
    //profile fetched from server
    fetchedUserProfile: {
      userName: "",
      userEmail: "",
    },
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
  },
});

//action creators
export const { updateUserName, updateUserEmail, updateFetchedUserProfile } =
  userSlice.actions;

//selectors
export const selectUserName = (state) => {
  return state.userSlice.userInputName;
};

export const selectUserEmail = (state) => {
  return state.userSlice.userInputEmail;
};

export const selectFetchedUserProfile = (state) => {
  return state.userSlice.userProfile;
};

export default userSlice.reducer;
