import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewToDoForm"
import { Todolist } from "./TodoList"

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
    <TodoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
  </>
)
}