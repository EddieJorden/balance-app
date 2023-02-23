import {
  createAsyncThunk, createSlice, SerializedError,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { prefix } from './utils';

interface UserProfile {
  username: string;
  email: string;
}

export const updateUserProfile = createAsyncThunk(
  'userProfile/updateUserProfile',
  async (userProfile: UserProfile) => {
    const { username, email } = userProfile;
    const response = await axios.post(`${prefix}/adduser`, { username, email });
    return response.data;
  },
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    userProfile: {} as UserProfile,
    isLoggedIn: false,
    isLoading: false,
    error: null as SerializedError | null,
  },
  reducers: {
    clearError: (state) => ({ ...state, error: null }),
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserProfile.pending, (state) => ({ ...state, isLoading: true }));
    builder.addCase(updateUserProfile.fulfilled, (state, action) => ({
      ...state, userProfile: action.payload, isLoading: false, isLoggedIn: true,
    }));
    builder.addCase(updateUserProfile.rejected, (state, action) => ({
      ...state, error: action.error, isLoading: false,
    }));
  },
});

export const selectUserProfile = (state: any) => state.userProfileSlice.userProfile;
export const selectLoginStatus = (state: any) => state.userProfileSlice.isLoggedIn;

export const { clearError } = userProfileSlice.actions;
export default userProfileSlice.reducer;
