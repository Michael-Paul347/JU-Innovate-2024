'use client'
import { useCallback, useEffect, useRef, useState } from "react";
const Timer5 = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const minuteCircle = useRef();
  const secondCircle = useRef();
  const hourCircle = useRef();
  const daysCircle = useRef();
  const changeCircleoffset = (seconds, minutes, hours, days) => {
    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${
        days > 0 ? 440 - (days * 430) / 365 : 440
      }px`;
      hourCircle.current.style.strokeDashoffset = `${
        hours > 0 ? 451 - (hours * 451) / 24 : 451
      }px`;
      minuteCircle.current.style.strokeDashoffset = `${
        minutes > 0 ? 451 - (minutes * 451) / 60 : 451
      }px`;
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 451 - (seconds * 451) / 60 : 451
      }px`;
    }
  };
  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    // Example: Set the target date and time to September 27th at 12:00:00 AM
    const countDownDate = new Date(new Date().getFullYear(), 8, 27, 0, 0, 0);
  
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);
  
  
  
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-l sm:bg-gradient-to-t " style={{fontFamily:"Shuri"}}>
      <div className="relative">
        <svg className="-rotate-90 h-48 w-48">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: ' #380036', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '	#0CBABA', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[url(#gradient)] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            ref={daysCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "440px",

            }}
            className="fill-transparent stroke-[white] stroke-[8px]"
          ></circle>
        </svg>
        <div className="text-white absolute top-16 left-11 text-xl  flex flex-col items-center w-24 h-20">
          <span className="text-center">{countDownTime?.days}</span>
          <span className="text-center">
            {countDownTime?.days == 1 ? "Day" : "Days"}
          </span>
        </div>
      </div>

      <div className="relative">
        <svg className="-rotate-90 h-48 w-48">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[url(#gradient)] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            ref={hourCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "451px",
              stroke: "white"
            }}
            className="fill-transparent stroke-[8px]"
          ></circle>
        </svg>
        <div className="text-white absolute top-16 left-11 text-xl  flex flex-col items-center w-24 h-20">
          <span className="text-center">{countDownTime?.hours}</span>
          <span className="text-center">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
        </div>
      </div>

      <div className="relative">
        <svg className="-rotate-90 h-48 w-48">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[url(#gradient)] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            ref={minuteCircle}
            cx="90"
            cy="90"
            style={{
              strokeDasharray: "451px",
            }}
            className="fill-transparent stroke-[white] stroke-[8px]"
          ></circle>
        </svg>
        <div className="text-white absolute top-16 left-11 text-xl flex flex-col items-center w-24 h-20">
          <span className="text-center">{countDownTime?.minutes}</span>
          <span className="text-center">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
      </div>

      <div className="relative">
        <svg className="-rotate-90 h-48 w-48">
          <circle
            r="70"
            cx="90"
            cy="90"
            className="fill-transparent stroke-[url(#gradient)] stroke-[8px]"
          ></circle>
          <circle
            r="70"
            cx="90"
            cy="90"
            ref={secondCircle}
            style={{
              strokeDasharray: "451px",
             
            }}
            className="fill-transparent stroke-[white] stroke-[8px]"
          ></circle>
        </svg>
        <div className="text-white absolute top-16 left-11 text-xl flex flex-col items-center w-24 h-20">
          <span className="text-center">{countDownTime?.seconds}</span>
          <span className="text-center">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Timer5;