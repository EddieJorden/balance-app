import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userName",
  initialState: {
    name: "no name selected",
  },
  reducers: {
    updateUserName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { updateUserName } = userSlice.actions;

export const selectUserName = (state) => {
  return state.userSlice.name;
};

export default userSlice.reducer;
