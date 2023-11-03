import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { _Modal } from 'shared/ui/Modal/_Modal';

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
    isOpen: false,
    children: childrenString
  },
  render: function Redner (args) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => { setIsOpen(true); }}>Open modal</Button>
        <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen}/>
      </>
    );
  }
};

export const Opened: Story = {
  args: {
    isOpen: true,
    children: childrenString
  },
  render: function Redner (args) {
    return (
      <_Modal {...args}/>
    );
  }
};
