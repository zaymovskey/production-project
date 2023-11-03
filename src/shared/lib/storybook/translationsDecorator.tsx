import type { Decorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../config/i18n/i18nForTests';
export const translationsDecorator: Decorator = (Story) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Story/>
    </I18nextProvider>
  );
};
