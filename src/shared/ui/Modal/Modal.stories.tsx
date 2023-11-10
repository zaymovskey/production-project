import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs']
} satisfies Meta<typeof Modal>;

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
    children: childrenString,
    closeByBackdrop: true
  },
  render: function Redner (args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => {
          setIsOpen(true);
        }}>Open modal</Button>
        { isOpen && (
          <Modal {...args} setShowModal={setIsOpen}/>
        ) }
      </>
    );
  }
};

export const Opened: Story = {
  args: {
    children: childrenString,
    closeByBackdrop: false
  },
  render: function Redner (args, context) {
    if (context.viewMode === 'docs') {
      return <></>;
    }

    return (
      <Modal {...args}/>
    );
  }
};
