import React, {useState, useEffect} from "react";
import { start } from "repl";
import { clearInterval } from "timers";


export const Count: React.FunctionComponent = ()=>{
    const [count, setCount] = useState(0);

    return (
        <div>

            <p>you have clicked {count} times</p>

            <button onClick={()=> setCount(count + 1)}>
                click
            </button>

        </div>

    )
}




export const Clock: React.FunctionComponent = ()=>{

    const [time, setTime] = useState(new Date().toLocaleTimeString());


    useEffect(()=>{
        const timer = setInterval(()=>{

            setTime(new Date().toLocaleTimeString());

        },1000);

    })



    return(
        <div>
            {time}

          

        </div>

    )


}


