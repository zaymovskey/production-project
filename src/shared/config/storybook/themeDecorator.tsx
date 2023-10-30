import { type EnumTheme } from 'app/providers/ThemeProvider';
import type { Decorator } from '@storybook/react';

export const themeDecorator: Decorator = (Story, context) => {
  const currentTheme: EnumTheme = context.globals.theme;
  return (
    <div className={`app ${currentTheme}`}>
      <Story />
    </div>
  );
};
