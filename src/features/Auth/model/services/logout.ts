import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entity/User';
import { type ILogoutResponse } from 'features/Auth/model/types/AuthResponse';
import { TOKEN_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const logout = createAsyncThunk<ILogoutResponse>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post<ILogoutResponse>(
        'http://localhost:8000/logout',
        {},
        {
          withCredentials: true
        }
      );

      if (response.data == null) {
        throw new Error('empty');
      }

      localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
      thunkAPI.dispatch(userActions.setAuthData(undefined));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
