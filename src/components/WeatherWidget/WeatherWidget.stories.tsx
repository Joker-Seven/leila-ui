import type { Meta, StoryObj } from '@storybook/react';
import { WeatherWidget } from './WeatherWidget';

const meta = {
  title: 'Dashboard/WeatherWidget',
  component: WeatherWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WeatherWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    location: 'London',
    temperature: 22.7,
    condition: 'Mostly Cloudy',
    humidity: 52.0,
    windSpeed: 6.16,
    feelsLike: 22.7,
    pressure: 1019.5,
    pollenStatus: 'Very High',
    rainChance: 0,
  },
};
