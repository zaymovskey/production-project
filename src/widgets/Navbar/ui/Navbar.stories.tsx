import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      login: { email: 'test@test.test', password: '12345678', isLoading: false }
    })
  ]
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
