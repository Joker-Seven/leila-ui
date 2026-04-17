import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';
import { Thermometer, Zap, Droplets } from 'lucide-react';

const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sensor: Story = {
  args: {
    icon: <Thermometer />,
    value: '23.3',
    unit: '°C',
    label: 'Outdoor',
    statusLabel: 'on',
    statusColor: 'var(--accent-secondary)'
  },
};

export const Comfort: Story = {
  args: {
    icon: <Droplets />,
    value: '£35.28',
    label: 'Hot water',
  },
};

export const Large: Story = {
  args: {
    icon: <Zap color="var(--success)" />,
    value: '574.7',
    unit: 'kWh',
    label: 'Power usage',
    large: true,
  },
};
