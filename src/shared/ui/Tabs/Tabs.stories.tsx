import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { type ITab, Tabs } from './Tabs';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  render: function Render(args, context) {
    const [selectedTabId, setSelectedTabId] = useState(1);
    const changeTabHandler = (tabId: number): void => {
      setSelectedTabId(tabId);
    };

    return <Tabs {...args} selectedId={selectedTabId} onClick={changeTabHandler} />;
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs: ITab[] = [
  {
    id: 1,
    title: 'Test 1'
  },
  {
    id: 2,
    title: 'Test 2'
  },
  {
    id: 3,
    title: 'Test 3'
  }
];

export const Primary: Story = {
  args: {
    selectedId: 1,
    tabs
  }
};
