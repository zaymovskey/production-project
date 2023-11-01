import type { Decorator } from '@storybook/react';

export const listDecorator: Decorator = (Story, context) => {
  const styles = { display: 'flex', alignItems: 'end', gap: 20 };
  return (
      <div style={styles}>
        <Story />
      </div>
  );
};
