import React from 'react';
import { cn } from '../../lib/utils';
import styles from './Sidebar.module.css';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Sidebar({ children, className, ...props }: SidebarProps) {
  return (
    <aside className={cn(styles.sidebar, className)} {...props}>
      <nav className={styles.nav}>
        {children}
      </nav>
    </aside>
  );
}

export interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  active?: boolean;
}

export function SidebarItem({ icon, active = false, className, ...props }: SidebarItemProps) {
  return (
    <button
      type="button"
      className={cn(styles.item, active && styles.active, className)}
      {...props}
    >
      <div className={styles.icon}>{icon}</div>
    </button>
  );
}
