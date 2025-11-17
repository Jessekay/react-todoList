import { useState } from "react"
import "./styles.css"

export default function App() {
const [newItem, setNewItem] = useState("");
const [todos, setTodos] = useState([])

function handleSubmit(e) {
  e.preventDefault();

setTodos((currentTodos) => {
    return [
      ...currentTodos,
      { id: crypto.randomUUID, title: newItem, completed: false }
    ]
  })
  setNewItem("")
}

function toggleToDo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
  })
}


return (
  <>
    <form onSubmit={handleSubmit} className="new-form-item">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">To Do list</h1>
    <ul className="list">
    {todos.map(todo => {
      return (
        <li key={todo.id}>
        <label>
          <input 
          type="checkbox" 
          checked={todo.completed} onChange={e => toggleToDo(e.target.checked)}/>
          {todo.title}
          <button className="btn btn-danger">Delete</button>
        </label>
      </li>
      )
    })}
    </ul>
  </>
)
}