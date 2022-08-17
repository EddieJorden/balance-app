import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userName",
  initialState: {
    userInputName: "no name selected",
    userProfile: {},
  },
  reducers: {
    updateUserName(state, action) {
      state.userInputName = action.payload;
    },
    updateUserProfile(state, action) {
      state.userProfile = {
        name: action.payload.userName,
      };
    },
  },
});

export const { updateUserName, updateUserProfile } = userSlice.actions;

export const selectUserName = (state) => {
  return state.userSlice.userInputName;
};

export const selectUserProfile = (state) => {
  return state.userslice.userProfile;
};

export default userSlice.reducer;
