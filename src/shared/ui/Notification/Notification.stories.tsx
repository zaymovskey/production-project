import type { Meta, StoryObj } from '@storybook/react';
import { EnumNotificationTheme, Notification } from './Notification';

const meta = {
  title: 'shared/Notification',
  component: Notification,
  tags: ['autodocs']
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    title: 'Test',
    text: 'Test test test test',
    theme: EnumNotificationTheme.ERROR
  }
};

export const Warning: Story = {
  args: {
    title: 'Test',
    text: 'Test test test test',
    theme: EnumNotificationTheme.WARNING
  }
};
