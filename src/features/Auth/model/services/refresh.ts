import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entity/User';
import { type IAuthResponse } from 'features/Auth/model/types/response/AuthResponse';

export const refresh = createAsyncThunk<IAuthResponse>(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IAuthResponse>('http://localhost:8000/refresh', {
        withCredentials: true
      });

      if (response.data == null) {
        throw new Error('empty');
      }

      localStorage.setItem('token', response.data.accessToken);
      thunkAPI.dispatch(userActions.setAuthData(response.data.user));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
