import type { Meta, StoryObj } from '@storybook/react';
import { Hamburger } from './Hamburger';
import { useState } from 'react';

const meta = {
  title: 'shared/Hamburger',
  component: Hamburger,
  tags: ['autodocs'],
  render: function Render (args) {
    const [active, setActive] = useState<boolean>(false);
    return <Hamburger {...args} active={active} setActive={setActive} />;
  }
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    active: false
  }
};
