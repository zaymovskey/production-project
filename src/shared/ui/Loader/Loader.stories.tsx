import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs']
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    active: false
  }
};

export const Dark: Story = {
  args: {
    active: false
  }
};
Dark.decorators = [getThemeDecorator(EnumTheme.DARK)];
