import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ILoginScheme } from 'features/Auth';
import { login } from 'features/Auth/model/services/login';
import { logout } from 'features/Auth/model/services/logout';

const initialState: ILoginScheme = {
  email: '',
  password: '',
  isLoading: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(logout.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        // state.error = action.payload;
      });
  }
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
