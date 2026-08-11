import { useState, useEffect } from "react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

function Counter() {
  const [count, setCount] = useState(50)
  const [isLoading, setIsLoading] = useState(true)
  const [inputText, setInputText] = useState<string>("")

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState<string>("")

  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const newTodo: Todo = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false,
    }

    setTodos((prev) => [...prev, newTodo])
    setInputText("")
  }

  const handleToggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const startEdit = (id: number, text: string) => {
    setEditingId(id)
    setEditingText(text)
  }

  const handleSaveEdit = (id: number) => {
    if (!editingText.trim()) return
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editingText.trim() } : todo
      )
    )
    setEditingId(null)
    setEditingText("")
  }

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    console.log("App started")
    setInterval(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  function handleCount() {
    if (count < 3) {
      alert("No more values to decrease")
    } else {
      setCount((pre) => pre - 3)
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>Decrease By 3</button>
      <h1>{isLoading ? "Loading..." : "Loaded!"}</h1>

      <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="What needs to be done?"
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px 0",
              }}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggleComplete(item.id)}
              />

              {editingId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    style={{ padding: "4px" }}
                  />
                  <button onClick={() => handleSaveEdit(item.id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  >
                    {item.text}
                  </span>
                  <button onClick={() => startEdit(item.id, item.text)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Counter
