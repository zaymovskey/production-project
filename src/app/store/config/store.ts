import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entity/User';
import { type IStateScheme } from 'app/store';
import { loginReducer } from 'features/Auth';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState?: IStateScheme) {
  const rootReducers: ReducersMapObject<IStateScheme> = {
    user: userReducer,
    login: loginReducer
  };

  return configureStore<IStateScheme>({
    reducer: rootReducers,
    devTools: _IS_DEV_,
    preloadedState: initialState
  });
}

export const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
