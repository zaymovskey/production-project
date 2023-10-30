import type { Meta, StoryObj } from '@storybook/react';
import { Button, EnumButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: 'Test',
    theme: EnumButtonTheme.FILLED
  }
};

export const Contour: Story = {
  args: {
    children: 'Test',
    theme: EnumButtonTheme.CONTOUR
  }
};
