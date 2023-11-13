import type { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
export const routerDecorator: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
