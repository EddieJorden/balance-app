import {
  createAsyncThunk, createSlice,
} from '@reduxjs/toolkit';

import axios from 'axios';

interface UserProfile {
  username: string;
  email: string;
}

export const updateUserProfile = createAsyncThunk(
  'userProfile/updateUserProfile',
  async (userProfile: UserProfile) => {
    const response = await axios.post('http://0.0.0.0:8888/adduser', userProfile);
    return response.data;
  },
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    userProfile: {} as UserProfile,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => ({ ...state, error: null }),
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserProfile.pending, (state) => ({ ...state, isLoading: true }));
    // eslint-disable-next-line max-len
    builder.addCase(updateUserProfile.fulfilled, (state, action) => ({
      ...state, userProfile: action.payload, isLoading: false, isLoggedIn: true,
    }));
    // eslint-disable-next-line max-len
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      // @ts-ignore
      // eslint-disable-next-line no-param-reassign
      state = { ...state, error: action.error, isLoading: false };
    });
  },
});

export const selectUserProfile = (state: any) => state.userProfileSlice;
export const selectLoginStatus = (state: any) => state.userProfileSlice.isLoggedIn;

export const { clearError } = userProfileSlice.actions;
export default userProfileSlice.reducer;
