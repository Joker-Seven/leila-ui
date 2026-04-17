import React from 'react';
import { GlassCard } from '../GlassCard';
import { Train, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';
import styles from './TravelWidget.module.css';

export interface RouteInfo {
  name: string;
  duration: string;
}

export interface LineInfo {
  name: string;
  status: string;
  color: string;
}

export interface TravelWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  routes?: RouteInfo[];
  lines?: LineInfo[];
}

export function TravelWidget({
  routes = [
    { name: 'Time to office', duration: '28 mins' },
    { name: 'Time to home', duration: '27 mins' },
  ],
  lines = [
    { name: 'Piccadilly', status: 'Good Service', color: 'var(--accent-secondary)' },
    { name: 'Northern', status: 'Good Service', color: '#ffffff' },
  ],
  className,
  ...props
}: TravelWidgetProps) {
  return (
    <GlassCard className={cn(styles.card, className)} {...props}>
      <p className={styles.title}>TRAVEL</p>
      
      <div className={styles.list}>
        {routes.map((r) => (
          <div key={r.name} className={styles.item}>
            <div className={styles.itemLeft}>
              <Clock className={styles.icon} />
              <span className={styles.itemName}>{r.name}</span>
            </div>
            <span className={styles.itemValue}>{r.duration}</span>
          </div>
        ))}
      </div>

      <div className={cn(styles.list, styles.linesList)}>
        {lines.map((l) => (
          <div key={l.name} className={styles.item}>
            <div className={styles.itemLeft}>
              <div className={styles.dot} style={{ backgroundColor: l.color }} />
              <span className={styles.itemName}>{l.name}</span>
            </div>
            <span className={styles.itemStatus}>{l.status}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
