import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import styles from './ClockWidget.module.css';

export interface ClockWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  showDate?: boolean;
}

export function ClockWidget({ showDate = true, className, ...props }: ClockWidgetProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className={cn(styles.clockContainer, className)} {...props}>
      <h1 className={styles.time}>{timeString}</h1>
      {showDate && <p className={styles.date}>{dateString}</p>}
    </div>
  );
}
