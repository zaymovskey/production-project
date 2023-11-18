import type { Meta, StoryObj } from '@storybook/react';
import { EnumInputTheme, Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Test'
  }
};

export const BottomBorder = {
  args: {
    theme: EnumInputTheme.BOTTOM_BORDER,
    placeholder: 'Test'
  }
};
