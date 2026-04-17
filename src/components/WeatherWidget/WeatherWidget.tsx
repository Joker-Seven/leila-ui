import React from 'react';
import { GlassCard } from '../GlassCard';
import { Cloud, Sun, Droplets, Wind, MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';
import styles from './WeatherWidget.module.css';

export interface WeatherWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  location?: string;
  temperature?: number;
  condition?: string;
  humidity?: number;
  windSpeed?: number;
  feelsLike?: number;
  pressure?: number;
  pollenStatus?: string;
  rainChance?: number;
}

export function WeatherWidget({
  location = 'London',
  temperature = 22.7,
  condition = 'Mostly Cloudy',
  humidity = 52.0,
  windSpeed = 6.16,
  feelsLike = 22.7,
  pressure = 1019.5,
  pollenStatus = 'Very High',
  rainChance = 0,
  className,
  ...props
}: WeatherWidgetProps) {
  return (
    <GlassCard className={cn(styles.card, className)} {...props}>
      <div className={styles.header}>
        <MapPin className={styles.iconSm} />
        <span>{location}</span>
      </div>

      <div className={styles.mainInfo}>
        <div className={styles.iconGroup}>
          <Sun className={styles.iconLg} color="var(--warning)" />
          <Cloud className={cn(styles.iconLg, styles.cloudIcon)} />
        </div>
        <div className={styles.tempGroup}>
          <span className={styles.temperature}>{temperature}</span>
          <span className={styles.unit}>°C</span>
        </div>
      </div>

      <p className={styles.condition}>{condition}</p>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <Droplets className={styles.iconXs} />
          <span>{humidity}%</span>
        </div>
        <div className={styles.metric}>
          <Wind className={styles.iconXs} />
          <span>{windSpeed}m/s</span>
        </div>
      </div>

      <div className={styles.details}>
        <p>Feels like {feelsLike} °C</p>
        <p>Pressure {pressure}</p>
        <p>Pollen {pollenStatus}</p>
        <p>{rainChance}% chance of rain</p>
      </div>
    </GlassCard>
  );
}
