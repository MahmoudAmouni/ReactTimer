import { useTimerContext } from './store/timer-context';
import Button from './UI/Button';

export default function Header() {
  const timerctx = useTimerContext();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={timerctx.isRunning ? timerctx.stopTimer : timerctx.startTimer}
      >
        {timerctx.isRunning ? "Start" : "Stop"} Timers
      </Button>
    </header>
  );
}
