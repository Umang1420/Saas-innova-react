import { useRef } from "react";

export default function Focus(){
    const inputRef : any = useRef<HTMLInputElement>(null);
    const handleFocus = ()=>{
        inputRef.current.focus()
    }

    const countref = useRef<number>(0)

    const handleCount = ()=>{
       countref.current = countref.current + 1;
        console.log(countref.current);
    }

    return (
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleCount}>Add</button>
        </>
    )
}