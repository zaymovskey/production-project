import { type EnumTheme, ThemeProvider } from 'app/providers/ThemeProvider';
import type { Decorator } from '@storybook/react';

export const themeDecorator: Decorator = (Story, context) => {
  const currentTheme: EnumTheme = context.globals.theme;
  const styles = { padding: 20, minHeight: 'unset' };
  return (
    <ThemeProvider>
      <div className={`app ${currentTheme}`} style={styles}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
