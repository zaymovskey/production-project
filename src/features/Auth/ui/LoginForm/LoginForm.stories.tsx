import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({ login: { email: 'test@test.test', password: '12345678' } })
  ],
  parameters: {
    mockData: {
      url: 'http://localhost:8000/login',
      method: 'POST',
      status: 200,
      response: {
        data: 'Hello storybook-addon-mock!'
      }
    }
  }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
