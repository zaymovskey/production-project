import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'sfasdf/Counter';
import { type StateSchema } from './StateSchema';

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: _IS_DEV_,
    preloadedState: initialState
  });
}
