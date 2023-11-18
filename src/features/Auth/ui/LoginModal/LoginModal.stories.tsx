import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { Button } from 'shared/ui/Button/Button';
import { ConfirmModal } from 'shared/ui/ConfirmModal/ConfirmModal';
import { LoginModal } from './LoginModal';

const meta = {
  title: 'features/Auth/LoginModal',
  component: LoginModal,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      login: { email: 'test@test.test', password: '12345678', isLoading: false }
    })
  ]
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    isOpen: false
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
        <LoginModal {...args} setIsOpen={setIsOpen} isOpen={isOpen} />
      </>
    );
  }
};

export const Opened: Story = {
  args: {
    isOpen: true,
    closeByBackdrop: false
  },
  render: function Redner(args, context) {
    if (context.viewMode === 'docs') {
      return <></>;
    }

    return <LoginModal {...args} />;
  }
};
