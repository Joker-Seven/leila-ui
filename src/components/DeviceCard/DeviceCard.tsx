import React from 'react';
import { GlassCard } from '../GlassCard';
import { cn } from '../../lib/utils';
import styles from './DeviceCard.module.css';

export interface DeviceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export function DeviceCard({
  title,
  subtitle,
  icon,
  active = false,
  className,
  ...props
}: DeviceCardProps) {
  return (
    <GlassCard
      interactive
      active={active}
      className={cn(styles.deviceCard, className)}
      {...props}
    >
      {icon && <div className={cn(styles.icon, active && styles.iconActive)}>{icon}</div>}
      <p className={styles.title}>{title}</p>
      {subtitle && <p className={cn(styles.subtitle, active && styles.subtitleActive)}>{subtitle}</p>}
    </GlassCard>
  );
}
