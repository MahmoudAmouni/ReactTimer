import { createContext, ReactNode, useContext, useReducer } from "react";

interface Timer{
    name:string;
    duration:number;
}
interface TimerState{
    timers:Timer[];
    isRunning:boolean;
}
const initialState:TimerState ={
    timers:[],
    isRunning:false
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

interface StartTimer{
    type:"START_TIMER"
}
interface StopTimer{
    type:"STOP_TIMER"
}
interface AddTimer{
    type:"ADD_TIMER"
    payload:Timer
}
type  Action = StartTimer | StopTimer | AddTimer;

function timerReducer(state:TimerState,action:Action):TimerState{
    if(action.type==="ADD_TIMER"){
        return{
            ...state,timers:[
                ...state.timers,{name:action.payload.name,duration:action.payload.duration}
            ]
        }
    }
    if(action.type==="START_TIMER"){
        return{
            ...state,isRunning:true
        }
    }
    //if the action is stop timer
      return {
        ...state,
        isRunning: false,
      };
    
}

function TimerContextProvider({children}:TCPProps){

    const [timerState, dispatch] = useReducer(timerReducer,initialState);

    const ctx:TCValue ={
        timers:timerState.timers,
        isRunning:timerState.isRunning,
        addTimer(timerData){
            dispatch({type:"ADD_TIMER",payload:timerData});
        },
        startTimer(){
            dispatch({type:"START_TIMER"})
        },
        stopTimer(){
            dispatch({ type: "STOP_TIMER" });
        }
    }
    return <TimerContext.Provider value={ctx}>
        {children}
    </TimerContext.Provider>
}

export default TimerContextProvider