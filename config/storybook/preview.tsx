import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';
import { routerDecorator } from 'shared/config/storybook/routerDecorator';

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
  decorators: [
    getThemeDecorator(EnumTheme.LIGHT),
    routerDecorator
  ]
};

export default preview;
