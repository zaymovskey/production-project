import type { Meta, StoryObj } from '@storybook/react';
import { translationsDecorator } from 'shared/config/storybook/translationsDecorator';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta = {
  title: 'features/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  decorators: [translationsDecorator]
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
