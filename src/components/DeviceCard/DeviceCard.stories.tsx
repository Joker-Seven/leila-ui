import type { Meta, StoryObj } from '@storybook/react';
import { DeviceCard } from './DeviceCard';
import { Lightbulb, DoorOpen, PlaySquare } from 'lucide-react';

const meta = {
  title: 'Components/DeviceCard',
  component: DeviceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeviceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: {
    title: 'Kitchen Spotlights',
    subtitle: 'Off',
    icon: <Lightbulb />,
    active: false,
  },
};

export const On: Story = {
  args: {
    title: 'Kitchen Spotlights',
    subtitle: 'On',
    icon: <Lightbulb />,
    active: true,
  },
};

export const Alternative: Story = {
  args: {
    title: 'Open front gate',
    subtitle: 'Off',
    icon: <DoorOpen />,
  },
};

export const AppMode: Story = {
  args: {
    title: 'Movie Time',
    subtitle: 'Illinois Street Lounge',
    icon: <PlaySquare />,
    active: true,
  },
};
