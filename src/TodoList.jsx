export function Todolist({ todos, toggleToDo, deleteTodo }) {
  return (
    <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
      return (
        <TodoItem
        {...todo}
        key={todo.id}
        toggleToDo={toggleToDo}
        deleteTodo={deleteTodo}/>
      )
    })}
    </ul>
  )
}

