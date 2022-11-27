import { useState, useEffect } from 'react';

function Pomodoro() {

    const taskMinutes = 25;
    const breakMinutes = 5;
    const longBreakMinutes = 15;
    const [message, setMessage] = useState(false);
    const [minutes, setMinutes] = useState(taskMinutes);
    const [seconds, setSeconds] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(
        () => {
            let interval = setInterval(() => {
                clearInterval(interval);
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                      } else {
                        let count = message ? counter : counter+1;
                        let minutes;
                        if (count%4 === 0) {
                            minutes = message ? taskMinutes-1 : longBreakMinutes-1;
                        }
                        else {
                            minutes = message ? taskMinutes-1 : breakMinutes-1;
                        }
                        let seconds = 59;
                        
                        setCounter(count); 
                        setSeconds(seconds);
                        setMinutes(minutes);
                        setMessage(!message);
                      }
                }
                else {
                    setSeconds(seconds-1);
                }
            }, 1000);
        },
        [seconds, counter]
    );

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const breakMessage = counter%4 === 0 ? "Time for a long break!" : "It's break time!";

    return (
        <div className="pomodoro">
            <div className="counter">
                Count: {counter}
            </div>
            <div className="message">
                {message ? <div>{breakMessage}</div> : <div>Keep going with your task!</div>}
            </div>
            <div className="timer">
                {formattedMinutes}:{formattedSeconds}
            </div>
        </div>
    );
}

export default Pomodoro;