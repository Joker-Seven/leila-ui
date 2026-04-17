import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarItem } from './Sidebar';
import { Home, Shield, Bell, Map, Settings, Sun } from 'lucide-react';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar>
        <SidebarItem icon={<Home />} active />
        <SidebarItem icon={<Shield />} />
        <SidebarItem icon={<Bell />} />
        <SidebarItem icon={<Map />} />
        <SidebarItem icon={<Settings />} />
        <SidebarItem icon={<Sun />} />
      </Sidebar>
    </div>
  ),
};
