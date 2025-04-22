import AddTimer from './Components/AddTimer';
import Header from './Components/Header';
import TimerContextProvider from './Components/store/timer-context';
import Timers from './Components/Timers';

function App() {
  return (
    <TimerContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerContextProvider>
  );
}

export default App;
