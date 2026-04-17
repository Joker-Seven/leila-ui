import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { Volume2 } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from '../GlassCard';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GlassCard style={{ width: '400px' }}>
        <Story />
      </GlassCard>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [volume, setVolume] = useState(30);
    return (
      <Slider
        icon={<Volume2 />}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
    );
  },
};
