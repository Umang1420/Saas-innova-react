import Timer from "./title.tsx"
import Counter from "./todo.tsx"
import Form from "./hoc.tsx"
import { loginContext, ThemeContext } from "./context/login.tsx"
import { useState } from "react"
import  Toolbar  from "./toolbar.tsx"
import Comparison from "./comparison.tsx"
import Practice from "./practice.tsx"

export function App() {
  const [user] = useState('Alex');
  const [theme] = useState('dark');
  return(
    <>
      
      <Counter />
      <loginContext.Provider value={user}>
        <Form />
        <Timer />
      </loginContext.Provider>
      <ThemeContext.Provider value={theme}>
      <Toolbar />
      </ThemeContext.Provider>
      <Comparison />
      <Practice/>
    </>
  )
   
  
}

export default App
