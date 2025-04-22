import { createContext, ReactNode, useContext } from "react";

interface Timer{
    name:string;
    duration:number;
}
interface TimerState{
    timers:Timer[];
    isRunning:boolean;
}

interface TCValue extends TimerState{
    addTimer:(timerData:Timer)=>void;
    stopTimer:()=>void;
    startTimer:()=>void;
} 
interface TCPProps{
    children:ReactNode;
}


const TimerContext = createContext<TCValue | null>(null);

export function useTimerContext(){
const timerctx = useContext(TimerContext);
if(timerctx === null) throw new Error("Ctx is null");
return timerctx;
}

function TimerContextProvider({children}:TCPProps){

    const ctx:TCValue ={
        timers:[],
        isRunning:false,
        addTimer(timerData:Timer){},
        startTimer(){},
        stopTimer(){}
    }
    return <TimerContext.Provider value={ctx}>
        {children}
    </TimerContext.Provider>
}

export default TimerContextProvider