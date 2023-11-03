import type { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const themeDecorator: Decorator = (Story, context) => {
  document.body.className = context.globals.theme;
  const styles = { padding: 20, minHeight: 'unset' };

  return (
    <div style={styles} className='app'>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </div>
  );
};
