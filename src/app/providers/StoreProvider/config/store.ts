import { configureStore } from '@reduxjs/toolkit';
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { type StateScheme } from 'app/providers/StoreProvider/config/StateScheme';

export function createReduxStore (initialState?: StateScheme): ToolkitStore {
  return configureStore<StateScheme>({
    reducer: {},
    devTools: _IS_DEV_
  });
}
