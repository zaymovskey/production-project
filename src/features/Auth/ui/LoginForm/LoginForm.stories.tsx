import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { translationsDecorator } from 'shared/lib/storybook/translationsDecorator';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      login: { email: 'test@test.test', password: '12345678', isLoading: false }
    }),
    translationsDecorator
  ]
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessRequest: Story = {
  parameters: {
    msw: [
      rest.post('http://localhost:8000/login', async (_req, res, ctx) => {
        const result = await res(
          ctx.delay(800),
          ctx.json([
            {
              user: {
                email: 'test@test.test',
                id: 'test-test-test-test-test',
                isActivated: true
              },
              accessToken: 'test.test.test-test',
              refreshToken: 'test.test.test-test'
            }
          ])
        );
        return result;
      })
    ]
  }
};

export const ErrorRequest: Story = {
  parameters: {
    msw: [
      rest.post('http://localhost:8000/login', async (_req, res, ctx) => {
        const result = await res(
          ctx.delay(800),
          ctx.json({
            message: 'Пользователь с email test@test.test не зарегистрирован',
            errors: []
          }),
          ctx.status(401)
        );
        return result;
      })
    ]
  }
};
