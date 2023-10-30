import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { EnumTheme } from 'app/providers/ThemeProvider';
import { translationsDecorator } from 'shared/config/storybook/translationsDecorator';

const meta = {
  title: 'features/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  decorators: [translationsDecorator]
} satisfies Meta<typeof LanguageSwitcher>;

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
