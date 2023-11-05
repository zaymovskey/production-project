import { type DeepPartial } from '@reduxjs/toolkit';
import { render, type RenderResult } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { type StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import i18nForTests from '../../../../config/i18n/i18nForTests';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateScheme>;
}

export function componentRender (
  component: ReactNode,
  options: componentRenderOptions = {}
): RenderResult {
  const {
    route = '/',
    initialState
  } = options;

  return render(
    <StoreProvider initialState={initialState}>
     <MemoryRouter initialEntries={[route]}>
       <I18nextProvider i18n={i18nForTests}>
         { component }
       </I18nextProvider>
   </MemoryRouter>
    </StoreProvider>
  );
}
