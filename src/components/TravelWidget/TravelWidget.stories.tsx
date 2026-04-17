import type { Meta, StoryObj } from '@storybook/react';
import { TravelWidget } from './TravelWidget';

const meta = {
  title: 'Dashboard/TravelWidget',
  component: TravelWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TravelWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    routes: [
      { name: 'Time to office', duration: '28 mins' },
      { name: 'Time to home', duration: '27 mins' },
    ],
    lines: [
      { name: 'Piccadilly', status: 'Good Service', color: 'var(--accent-secondary)' },
      { name: 'Northern', status: 'Good Service', color: '#ffffff' },
    ],
  },
};
