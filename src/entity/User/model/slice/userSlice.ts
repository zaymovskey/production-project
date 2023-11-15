import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IUser, type IUserScheme } from 'entity/User/model/types/UserScheme';

const initialState: IUserScheme = {
  isAuth: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser | undefined>) => {
      state.authData = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    initAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
