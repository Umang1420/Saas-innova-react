import { useRef } from "react";

export default function Focus(){
    const inputRef : any = useRef<HTMLInputElement>(null);
    const handleFocus = ()=>{
        inputRef.current.focus()
    }

    return (
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus</button>
        </>
    )
}