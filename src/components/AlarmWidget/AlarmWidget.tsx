import React from 'react';
import { GlassCard } from '../GlassCard';
import { Shield, ShieldOff, Ghost, DoorOpen, type LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import styles from './AlarmWidget.module.css';

export interface AlarmItem {
  icon: LucideIcon;
  label: string;
  sublabel: string;
  active?: boolean;
}

export interface AlarmWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: AlarmItem[];
}

export function AlarmWidget({
  items = [
    { icon: ShieldOff, label: 'Disarmed', sublabel: 'Disarmed', active: false },
    { icon: Ghost, label: 'Nepune', sublabel: 'Alarm', active: false },
    { icon: DoorOpen, label: 'Door entry', sublabel: 'Simulate presence', active: false },
  ],
  className,
  ...props
}: AlarmWidgetProps) {
  return (
    <GlassCard className={cn(styles.card, className)} {...props}>
      <p className={styles.title}>ALARM</p>
      
      <div className={styles.grid}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className={cn(styles.item, item.active && styles.itemActive)}>
              <Icon className={styles.icon} />
              <span className={styles.label}>{item.label}</span>
              <span className={styles.sublabel}>{item.sublabel}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
