import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { row, rowsContainer } from 'shared/lib/storybook/positionStyles';
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
  // decorators: [listDecorator],
  render: function Render(args) {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [SLoading, setSLoading] = useState(false);
    const [MLoading, setMLoading] = useState(false);
    const [LLoading, setLLoading] = useState(false);
    const [XLLoading, setXLLoading] = useState(false);
    /* eslint-enable @typescript-eslint/no-unused-vars */

    /* eslint-disable no-eval */
    const setLoading = (size: string): void => {
      eval(`set${size}Loading`)(true);
      setTimeout(() => {
        eval(`set${size}Loading`)(false);
      }, 1000);
    };

    const buttons = (
      Object.keys(EnumButtonSize) as Array<keyof typeof EnumButtonSize>
    ).map((size, index) => (
      <Button
        key={index}
        onClick={() => {
          setLoading(size);
        }}
        loading={eval(`${size}Loading`)}
        size={EnumButtonSize[size]}
        {...args}
      >
        {`size ${size}`}
      </Button>
    ));
    /* eslint-enable no-eval */

    const loadingButtons = (
      Object.keys(EnumButtonSize) as Array<keyof typeof EnumButtonSize>
    ).map((size, index) => (
      <Button key={index} loading={true} size={EnumButtonSize[size]} {...args}>
        {`size ${size}`}
      </Button>
    ));

    return (
      <div style={rowsContainer}>
        <div style={row}>{buttons}</div>
        <div style={row}>{loadingButtons}</div>
      </div>
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
