import { type EnumTheme } from 'app/providers/ThemeProvider';
import type { Decorator } from '@storybook/react';

export function getThemeDecorator (theme: EnumTheme): Decorator {
  // eslint-disable-next-line react/display-name
  return (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
}
