import { useContext } from "react";
import {loginContext} from "./context/login"


export default function Form() {
  const user = useContext(loginContext)
  
  return (

      <h1>{`Hello ${user}`}</h1>
    
  )
  
}
