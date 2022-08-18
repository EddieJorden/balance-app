import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userName",
  initialState: {
    userInputName: "no name selected",
    userProfile: {
      name: "",
      email: "",
    },
  },
  reducers: {
    updateUserName(state, action) {
      state.userInputName = action.payload;
    },
    updateUserProfile(state, action) {
      const { name, email } = action.payload;

      state.userProfile = {
        name,
        email,
      };
    },
  },
});

export const { updateUserName, updateUserProfile } = userSlice.actions;

export const selectUserName = (state) => {
  return state.userSlice.userInputName;
};

export const selectUserProfile = (state) => {
  return state.userSlice.userProfile;
};

export default userSlice.reducer;
