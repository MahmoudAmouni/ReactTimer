import { useTimerContext } from "./store/timer-context";
import Timer from "./Timer";

export default function Timers() {
  const {timers} = useTimerContext();
  return (
    <ul>
      {timers.map((el) => (
        <li key={el.name}>
          <Timer {...el} />
        </li>
      ))}
    </ul>
  );
}
