import React from 'react';
import { cn } from '../../lib/utils';
import styles from './GlassCard.module.css';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  active?: boolean;
}

export function GlassCard({
  children,
  className,
  interactive = false,
  active = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        styles.card,
        interactive && styles.interactive,
        active && styles.active,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
