import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';
import { TriangleAlert, Info, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../GlassCard';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GlassCard style={{ width: '400px', display: 'flex', flexDirection: 'column' }}>
        <Story />
      </GlassCard>
    ),
  ],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  render: () => (
    <>
      <ListItem
        icon={<TriangleAlert />}
        iconColor="var(--warning)"
        title="Pollen levels very high"
        action="1h ago"
      />
      <ListItem
        icon={<Info />}
        iconColor="var(--accent-secondary)"
        title="Software update available"
        action="3h ago"
      />
      <ListItem
        icon={<CheckCircle2 />}
        iconColor="var(--success)"
        title="Weekly energy report ready"
        action="5h ago"
      />
    </>
  ),
};

export const Single: Story = {
  args: {
    icon: <TriangleAlert />,
    iconColor: 'var(--warning)',
    title: 'Hot water tank above 60°C',
    action: '8h ago',
  },
};
