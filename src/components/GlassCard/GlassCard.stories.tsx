import type { Meta, StoryObj } from '@storybook/react';
import { GlassCard } from './GlassCard';

const meta = {
  title: 'Components/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a1118' },
        { name: 'light', value: '#e0e7ff' }
      ]
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: 500 }}>Mostly Cloudy</h3>
        <p style={{ margin: 0, opacity: 0.6, fontSize: '0.9rem' }}>Feels like 22.7 °C</p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <div style={{ textAlign: 'center', width: '120px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>Open front gate</p>
        <p style={{ margin: '8px 0 0 0', opacity: 0.6, fontSize: '0.8rem' }}>Off</p>
      </div>
    ),
  },
};

export const Active: Story = {
  args: {
    interactive: true,
    active: true,
    children: (
      <div style={{ textAlign: 'center', width: '120px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>Movie Time</p>
        <p style={{ margin: '8px 0 0 0', color: 'var(--accent-primary)', fontSize: '0.8rem' }}>Illinois Street Lounge</p>
      </div>
    ),
  },
};
