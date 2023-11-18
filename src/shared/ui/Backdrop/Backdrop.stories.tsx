import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './Backdrop';

const meta = {
  title: 'shared/Backdrop',
  component: Backdrop,
  tags: ['autodocs']
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    close: () => {},
    showBackdrop: true
  }
};
