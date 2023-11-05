import { type DeepPartial } from '@reduxjs/toolkit';
import { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type StateScheme } from 'app/providers/StoreProvider/config/StateScheme';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScheme>;
}

export const StoreProvider: FC = (props: StoreProviderProps) => {
  const {
    children,
    initialState
  } = props;

  const store = createReduxStore(initialState as StateScheme);

  return (
        <Provider store={store}>
            {children}
        </Provider>
  );
};
