import { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type StateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: StateScheme;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
