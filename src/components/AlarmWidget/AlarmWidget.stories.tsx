import type { Meta, StoryObj } from '@storybook/react';
import { AlarmWidget } from './AlarmWidget';
import { ShieldOff, Ghost, DoorOpen, Shield } from 'lucide-react';

const meta = {
  title: 'Dashboard/AlarmWidget',
  component: AlarmWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlarmWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { icon: ShieldOff, label: 'Disarmed', sublabel: 'Disarmed', active: false },
      { icon: Ghost, label: 'Nepune', sublabel: 'Alarm', active: false },
      { icon: DoorOpen, label: 'Door entry', sublabel: 'Simulate presence', active: false },
    ],
  },
};

export const Armed: Story = {
  args: {
    items: [
      { icon: Shield, label: 'Armed', sublabel: 'Away Mode', active: true },
      { icon: Ghost, label: 'Nepune', sublabel: 'Off', active: false },
      { icon: DoorOpen, label: 'Door entry', sublabel: 'Simulate presence', active: false },
    ],
  },
};
