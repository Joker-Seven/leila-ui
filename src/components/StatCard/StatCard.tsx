import React from 'react';
import { GlassCard } from '../GlassCard';
import { cn } from '../../lib/utils';
import styles from './StatCard.module.css';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  value: React.ReactNode;
  label: string;
  unit?: string;
  statusLabel?: string;
  statusColor?: string;
  large?: boolean;
}

export function StatCard({
  icon,
  value,
  label,
  unit,
  statusLabel,
  statusColor = 'var(--text-secondary)',
  large = false,
  className,
  ...props
}: StatCardProps) {
  return (
    <GlassCard className={cn(styles.statCard, large && styles.large, className)} {...props}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.valueContainer}>
        <span className={styles.value}>{value}</span>
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
      <div className={styles.label}>{label}</div>
      {statusLabel && (
        <div className={styles.status}>
          <span 
            className={styles.statusDot} 
            style={{ backgroundColor: statusColor }}
          />
          <span className={styles.statusText}>{statusLabel}</span>
        </div>
      )}
    </GlassCard>
  );
}
