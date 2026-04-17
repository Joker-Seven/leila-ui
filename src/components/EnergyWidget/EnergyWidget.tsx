import React from 'react';
import { GlassCard } from '../GlassCard';
import { cn } from '../../lib/utils';
import { Zap } from 'lucide-react';
import styles from './EnergyWidget.module.css';

export interface EnergyWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  currentUsage: number;
  maxUsage: number;
  unit?: string;
  title?: string;
}

export function EnergyWidget({
  currentUsage,
  maxUsage,
  unit = 'kW',
  title = 'Energy Usage',
  className,
  ...props
}: EnergyWidgetProps) {
  const percentage = Math.min(100, Math.max(0, (currentUsage / maxUsage) * 100));
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <GlassCard className={cn(styles.card, className)} {...props}>
      <p className={styles.title}>{title}</p>
      
      <div className={styles.ringContainer}>
        <svg className={styles.ringSvg} width="120" height="120" viewBox="0 0 100 100">
          <circle
            className={styles.ringBackground}
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="6"
            fill="none"
          />
          <circle
            className={styles.ringProgress}
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        
        <div className={styles.ringContent}>
          <Zap className={styles.icon} />
          <span className={styles.value}>{currentUsage}</span>
          <span className={styles.unit}>{unit}</span>
        </div>
      </div>
      
      <div className={styles.footer}>
        <span>0</span>
        <span>{maxUsage} {unit}</span>
      </div>
    </GlassCard>
  );
}
