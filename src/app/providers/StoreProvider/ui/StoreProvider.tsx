import { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { type StateScheme } from 'app/providers/StoreProvider/config/StateScheme';
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
