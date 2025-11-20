import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewToDoForm"

export default function App(props) {
  props.onSubmit
const [todos, setTodos] = useState([])

function addTodo(title) {
  setTodos(currentTodos => {
    return [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]
  })
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

function deleteToDo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}


return (
  <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">To Do list</h1>
    <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
      return (
        <li key={todo.id}>
        <label>
          <input
          type="checkbox"
          checked={todo.completed} 
          onChange={e => toggleToDo(e.target.checked)}/>
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