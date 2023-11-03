import type { Meta, StoryObj } from '@storybook/react';
import { listDecorator } from 'shared/lib/storybook/listDecorator';
import { Button, EnumButtonSize, EnumButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [listDecorator],
  render: function Render (args) {
    return (
      <>
        <Button {...args} size={EnumButtonSize.S}>Size S</Button>
        <Button {...args} size={EnumButtonSize.M}>Size M</Button>
        <Button {...args} size={EnumButtonSize.L}>Size L</Button>
        <Button {...args} size={EnumButtonSize.XL}>Size XL</Button>
      </>
    );
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    theme: EnumButtonTheme.FILLED
  }
};

export const Contour: Story = {
  args: {
    theme: EnumButtonTheme.CONTOUR
  }
};
