import React from 'react';
import { cn } from '../../lib/utils';
import styles from './Slider.module.css';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: number;
  min?: number;
  max?: number;
  icon?: React.ReactNode;
}

export function Slider({
  value,
  min = 0,
  max = 100,
  icon,
  className,
  ...props
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn(styles.container, className)}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.trackContainer}>
        <div className={styles.trackBackground} />
        <div 
          className={styles.trackFill} 
          style={{ width: `${percentage}%` }} 
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className={styles.input}
          {...props}
        />
      </div>
    </div>
  );
}
