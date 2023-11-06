import type { IStateScheme } from './config/StateScheme';
import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
  type IStateScheme
};
