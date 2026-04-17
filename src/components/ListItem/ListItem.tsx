import React from 'react';
import { cn } from '../../lib/utils';
import styles from './ListItem.module.css';

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  iconColor?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
}

export function ListItem({
  icon,
  iconColor,
  title,
  subtitle,
  action,
  className,
  ...props
}: ListItemProps) {
  return (
    <div className={cn(styles.item, className)} {...props}>
      {icon && (
        <div className={styles.icon} style={iconColor ? { color: iconColor } : undefined}>
          {icon}
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
