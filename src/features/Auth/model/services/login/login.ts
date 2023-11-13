import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type IUser } from 'entity/User';

interface ILoginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk<IUser, ILoginProps, { rejectValue: string }>(
  'auth/login',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8000/login', authData);

      if (response.data == null) {
        throw new Error('empty');
      }

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
