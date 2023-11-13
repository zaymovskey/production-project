import { createSlice } from '@reduxjs/toolkit';
import { type IUserScheme } from 'entity/User/model/types/UserScheme';

const initialState: IUserScheme = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
