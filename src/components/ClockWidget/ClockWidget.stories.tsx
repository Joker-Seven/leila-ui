import type { Meta, StoryObj } from '@storybook/react';
import { ClockWidget } from './ClockWidget';

const meta = {
  title: 'Dashboard/ClockWidget',
  component: ClockWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClockWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showDate: true,
  },
};
