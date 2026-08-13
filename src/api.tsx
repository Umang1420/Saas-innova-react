import { useState, useEffect } from "react";
import "./app.css"

interface User {
    id: number;
    username: string;
    name: string;
    email: string;
}
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const Api = () => {
    const [items, setItems] = useState<User[]>([]);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [dataIsLoaded, setDataIsLoaded] = useState<Boolean>(false);
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setDataIsLoaded(true);
            });
            
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=> res.json())
            .then((json)=> {
                setTodos(json.slice(0,12));
                setDataIsLoaded(true);  
            })
    }, []); 

    if (!dataIsLoaded) {
        return (
            <div>
                <h1>Please wait some time....</h1>
            </div>
        );
    }
  
    return (
        <>
       
        <div className="App">
            <h1 className="geeks">GeeksForGeeks</h1>
            <h3>Fetch data from an API in React</h3>
            <div className="container">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <ol>
                            <div>
                                <strong>User_Name: </strong>
                                {item.username},
                            </div>
                            <div>Full_Name: {item.name}</div>
                            <div>User_Email: {item.email}</div>
                        </ol>
                    </div>
                ))}
            </div>
            <h3>Todo Data</h3>
             <div className="container">
                {todos.map((item) => (
                    <div className="item" key={item.id}>
                        <ol>
                            <div>
                                <strong>Title: </strong>
                                {item.title},
                            </div>
                            <div>Completed: {item.completed ? "done" : "Left"}</div>
                        </ol>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};
export default Api;