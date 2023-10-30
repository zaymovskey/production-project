import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, EnumAppLinkTheme } from './AppLink';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Test',
    theme: EnumAppLinkTheme.PRIMARY
  }
};
export const PrimaryDark: Story = {
  args: {
    children: 'Test',
    theme: EnumAppLinkTheme.PRIMARY
  }
};
PrimaryDark.decorators = [getThemeDecorator(EnumTheme.DARK)];

export const Secondary: Story = {
  args: {
    children: 'Test',
    theme: EnumAppLinkTheme.SECONDARY
  }
};
export const SecondaryDark: Story = {
  args: {
    children: 'Test',
    theme: EnumAppLinkTheme.SECONDARY
  }
};
SecondaryDark.decorators = [getThemeDecorator(EnumTheme.DARK)];
