import React, { useState, useEffect } from "react";

const CountdownTimer = ({ startTime, endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
      // Call the callback function when the timer ends
      // if (onTimerEnd) {
      //   onTimerEnd();
      // }
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="text-center days">
        <h4 className="mb-1 text-primary">{timeLeft.days}</h4>
        <p className="small mb-0">Days</p>
      </div>
      <div className="text-center hours">
        <h4 className="mb-1 text-primary">{timeLeft.hours}</h4>
        <p className="small mb-0">Hours</p>
      </div>
      <div className="text-center minutes">
        <h4 className="mb-1 text-primary">{timeLeft.minutes}</h4>
        <p className="small mb-0">Minutes</p>
      </div>
      <div className="text-center seconds">
        <h4 className="mb-1 text-primary">{timeLeft.seconds}</h4>
        <p className="small mb-0">Seconds</p>
      </div>
    </>
  );
};

export default CountdownTimer;
