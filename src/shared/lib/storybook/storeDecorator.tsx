import { type DeepPartial } from '@reduxjs/toolkit';
import type { Decorator } from '@storybook/react';
import { Provider } from 'react-redux';
import { createReduxStore, type IStateScheme } from 'app/store';

export const storeDecorator = (state: DeepPartial<IStateScheme>): Decorator => {
  // eslint-disable-next-line react/display-name
  return (Story, context) => {
    const store = createReduxStore(state as IStateScheme);

    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  };
};
