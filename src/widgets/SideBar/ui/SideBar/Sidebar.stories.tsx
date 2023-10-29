import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [getThemeDecorator(EnumTheme.DARK)];
