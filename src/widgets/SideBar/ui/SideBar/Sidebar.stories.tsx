import type { Meta, StoryObj } from '@storybook/react';
import { translationsDecorator } from 'shared/lib/storybook/translationsDecorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [translationsDecorator]
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
