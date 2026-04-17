import React from 'react';
import { cn } from '../../lib/utils';
import styles from './SegmentedControl.module.css';

export interface SegmentedControlOption {
  label: string;
  value: string;
}

export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
}

export function SegmentedControl({
  options,
  value,
  onChange,
  className,
  ...props
}: SegmentedControlProps) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            className={cn(styles.button, isActive && styles.active)}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
