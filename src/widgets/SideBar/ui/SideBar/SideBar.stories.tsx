import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from './SideBar';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widgets/SideBar',
  component: SideBar,
  tags: ['autodocs']
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [getThemeDecorator(EnumTheme.DARK)];
