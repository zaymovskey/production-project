import { configureStore } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { type StateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import { counterReducer } from 'entities/Counter';

export function createReduxStore (initialState?: StateScheme): ToolkitStore {
  return configureStore<StateScheme>({
    reducer: {
      counter: counterReducer
    },
    devTools: _IS_DEV_
  });
}
