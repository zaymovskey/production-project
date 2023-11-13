import { type DeepPartial } from '@reduxjs/toolkit';
import { render, type RenderResult } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createReduxStore, type IStateScheme } from 'app/store';
import i18nForTests from '../../../../config/i18n/i18nForTests';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<IStateScheme>;
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
): RenderResult {
  const { route = '/', initialState } = options;

  const store = createReduxStore(initialState as IStateScheme);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </Provider>
  );
}
