import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entity/User';
import { type IAuthResponse } from 'features/Auth/model/types/response/AuthResponse';

interface ILoginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk<
  IAuthResponse,
  ILoginProps,
  { rejectValue: string }
>('auth/login', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<IAuthResponse>(
      'http://localhost:8000/login',
      authData,
      { withCredentials: true }
    );

    if (response.data == null) {
      throw new Error('empty');
    }

    localStorage.setItem('token', response.data.accessToken);
    thunkAPI.dispatch(userActions.setAuthData(response.data.user));

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('error');
  }
});
