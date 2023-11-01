import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { translationsDecorator } from 'shared/config/storybook/translationsDecorator';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [translationsDecorator]
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
