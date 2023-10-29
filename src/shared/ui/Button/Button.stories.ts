import type { Meta, StoryObj } from '@storybook/react';

import { Button, EnumButtonTheme } from './Button';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledLight: Story = {
  args: {
    children: 'Test',
    theme: EnumButtonTheme.FILLED
  }
};

export const FilledDark: Story = {
  args: {
    children: 'Test',
    theme: EnumButtonTheme.FILLED
  }
};
FilledDark.decorators = [getThemeDecorator(EnumTheme.DARK)];

export const ContourLight: Story = {
  args: {
    children: 'Test',
    theme: EnumButtonTheme.CONTOUR
  }
};

export const ContourDark: Story = {
  args: {
    children: 'Test',
    theme: EnumButtonTheme.CONTOUR
  }
};
ContourDark.decorators = [getThemeDecorator(EnumTheme.DARK)];
