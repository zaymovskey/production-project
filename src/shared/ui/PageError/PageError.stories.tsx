import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/PageError',
  component: PageError,
  tags: ['autodocs']
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [getThemeDecorator(EnumTheme.DARK)];
