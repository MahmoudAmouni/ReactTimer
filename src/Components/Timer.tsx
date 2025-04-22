import { useEffect, useRef, useState } from 'react';
import Container from './UI/Container';
import { Timer as TProps, useTimerContext } from './store/timer-context';
export default function Timer({name,duration}:TProps) {
  const interval =useRef<number | null>(null)
  const [remainingTime,setRemainingTime] = useState(duration *1000);
  const {isRunning} = useTimerContext();

  if(remainingTime <=0 && interval.current){
    clearInterval(interval.current)
  }
  useEffect(()=>{
    if(isRunning){
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);
      interval.current = timer;
    }
    

  },[isRunning])
  const time = (remainingTime/1000).toFixed(2)
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{time}</p>
      <progress max={duration*1000} value={remainingTime} />
    </Container>
  );
}
