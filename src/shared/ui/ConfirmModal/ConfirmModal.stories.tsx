import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ConfirmModal } from './ConfirmModal';

const meta = {
  title: 'shared/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs']
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const childrenString = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Iste nostrum numquamreiciendis totam ut. 
    Deleniti dolor hic, incidunt inventore ipsum modi molestias omnis,perferendis, 
    placeat porro quaerat voluptate voluptatibus. Neque?
    `;

export const Closed: Story = {
  args: {
    isOpen: false,
    titleText: 'Test',
    bodyText: 'Test test test test test test test?',
    children: childrenString
  },
  render: function Redner(args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open modal
        </Button>
        <ConfirmModal
          {...args}
          onCancelHandler={() => {
            setIsOpen(false);
          }}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </>
    );
  }
};

export const Opened: Story = {
  args: {
    isOpen: true,
    children: childrenString
  },
  render: function Redner(args, context) {
    if (context.viewMode === 'docs') {
      return <></>;
    }

    return <ConfirmModal {...args} />;
  }
};
