import { type ReactNode } from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface IRenderWithRouterOptions {
  route?: string;
}

export function componentRender (
  component: ReactNode,
  options: IRenderWithRouterOptions = {}
): RenderResult {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  );
}
