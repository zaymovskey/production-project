import type { Decorator } from '@storybook/react';
import i18n from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
export const translationsDecorator: Decorator = (Story) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Story/>
    </I18nextProvider>
  );
};
