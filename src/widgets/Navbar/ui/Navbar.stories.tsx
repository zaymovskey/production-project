import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [getThemeDecorator(EnumTheme.DARK)];
