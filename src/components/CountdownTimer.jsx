import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endTime }) => {
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
    <div className="d-flex align-items-center justify-content-between p-3 timer rounded-2">
      <div className="text-center days">
        <h4 className="mb-1">{timeLeft.days || '0'}</h4>
        <p className="small mb-0">Days</p>
      </div>
      <div className="text-center hours">
        <h4 className="mb-1">{timeLeft.hours || '0'}</h4>
        <p className="small mb-0">Hours</p>
      </div>
      <div className="text-center minutes">
        <h4 className="mb-1">{timeLeft.minutes || '0'}</h4>
        <p className="small mb-0">Minutes</p>
      </div>
      <div className="text-center seconds">
        <h4 className="mb-1">{timeLeft.seconds || '0'}</h4>
        <p className="small mb-0">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;