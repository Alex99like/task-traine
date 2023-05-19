import { differenceInSeconds } from "date-fns";
import { useState, useEffect } from "react";
import { DateCounterItem } from "./DateCounterItem";
import styles from './DateCounter.module.scss'

type IDate = {
  days: string 
  hours: string
  minutes: string
  seconds: string
}

export const DateCounter = () => {
  const [countdown, setCountdown] = useState<IDate>({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const targetDate = new Date('2023-05-31T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const secondsDifference = differenceInSeconds(targetDate, now);
      if (secondsDifference <= 0) {
        //setCountdown('Countdown complete!');
        clearInterval(interval);
      } else {
        const formattedCountdown = formatDuration(secondsDifference);
        setCountdown(formattedCountdown);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDuration = (seconds: number): IDate => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return { 
      days: padZero(days), 
      hours: padZero(hours), 
      minutes: padZero(minutes),
      seconds: padZero(remainingSeconds)
    }
  };

  const padZero = (value: number) => {
    return String(value).padStart(2, '0');
  };

  return (
    <div className={styles.wrapper}>
      <DateCounterItem name="Days" value={countdown.days} />
      <span className={styles.divider}>:</span>
      <DateCounterItem name="Hours" value={countdown.hours} />
      <span className={styles.divider}>:</span>
      <DateCounterItem name="Minutes" value={countdown.minutes} />
      <span className={styles.divider}>:</span>
      <DateCounterItem name="Seconds" value={countdown.seconds} />
    </div>
  );
};