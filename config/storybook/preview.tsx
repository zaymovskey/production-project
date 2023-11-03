import type { Preview } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from 'shared/config/i18n/i18n';
import '../../src/app/styles/index.scss';
import { routerDecorator } from 'shared/config/storybook/routerDecorator';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' }
        ],
        showName: true
      }
    }
  },
  decorators: [
    themeDecorator,
    routerDecorator
  ]
};

export default preview;
