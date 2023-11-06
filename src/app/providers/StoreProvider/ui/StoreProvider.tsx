import { type DeepPartial } from '@reduxjs/toolkit';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type IStateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateScheme>;
}

export const StoreProvider = (props: StoreProviderProps): ReactNode => {
  const {
    children,
    initialState
  } = props;

  const store = createReduxStore(initialState as IStateScheme);

  return (
        <Provider store={store}>
            {children}
        </Provider>
  );
};
