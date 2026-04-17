import type { Meta, StoryObj } from '@storybook/react';
import { EnergyWidget } from './EnergyWidget';

const meta = {
  title: 'Dashboard/EnergyWidget',
  component: EnergyWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EnergyWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentUsage: 4.2,
    maxUsage: 10,
    unit: 'kW',
    title: 'Energy Usage',
  },
};

export const HighUsage: Story = {
  args: {
    currentUsage: 8.5,
    maxUsage: 10,
    unit: 'kW',
    title: 'Peak Time',
  },
};
