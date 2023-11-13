import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { counterReducer } from 'entity/Counter';
import { userReducer } from 'entity/User';
import { type IStateScheme } from './StateScheme';

export function createReduxStore(initialState?: IStateScheme): ToolkitStore {
  const rootReducers: ReducersMapObject<IStateScheme> = {
    counter: counterReducer,
    user: userReducer
  };

  return configureStore<IStateScheme>({
    reducer: rootReducers,
    devTools: _IS_DEV_,
    preloadedState: initialState
  });
}
