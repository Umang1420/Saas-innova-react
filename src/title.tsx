import { useState, useEffect } from "react";

export default function Timer(){
    const [count, setCount] = useState<number>(50);

    useEffect(()=>{
        if(count <= 0) return;
        const interval = setInterval(()=>{
            setCount((pre)=>(pre-1));
        },1000);

        return()=> clearInterval(interval);
    },[count])

    return(
        <>
        <p>Time Left: {count}s</p>
        {count === 0 && <p style={{ color: 'red' }}>⏰ Time is up!</p>}
        </>
    )
}