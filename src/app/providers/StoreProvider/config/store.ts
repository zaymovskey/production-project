import { configureStore } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { counterReducer } from 'sfasdf/Counter';
import { type StateScheme } from './StateScheme';

export function createReduxStore (initialState?: StateScheme): ToolkitStore {
  return configureStore<StateScheme>({
    reducer: {
      counter: counterReducer
    },
    devTools: _IS_DEV_,
    preloadedState: initialState
  });
}
