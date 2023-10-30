import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/PageLoader',
  component: PageLoader,
  tags: ['autodocs']
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [getThemeDecorator(EnumTheme.DARK)];
