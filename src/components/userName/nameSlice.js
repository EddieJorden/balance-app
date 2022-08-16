import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userName",
  initialState: {
    name: "no name selected",
  },
  reducers: {},
});

export default userSlice.reducer;
