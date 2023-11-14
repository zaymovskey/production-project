import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { routerDecorator } from 'shared/lib/storybook/routerDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from '../i18n/i18n';

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
  decorators: [themeDecorator, routerDecorator]
};

export default preview;
