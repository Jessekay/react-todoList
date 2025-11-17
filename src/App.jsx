import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewToDoForm"

export default function App() {
const [todos, setTodos] = useState([])



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

function deleteToDo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}


return (
  <>
    <NewTodoForm />
    <h1 className="header">To Do list</h1>
    <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
      return (
        <li key={todo.id}>
        <label>
          <input
          type="checkbox"
          checked={todo.completed} onChange={e => toggleToDo(e.target.checked)}/>
          {todo.title}
          <button
          onClick={() => deleteToDo(todo.id)}
          className="btn btn-danger">Delete</button>
        </label>
      </li>
      )
    })}
    </ul>
  </>
)
}