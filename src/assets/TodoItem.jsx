export function TodoItem({ completed, id, title, toggleToDo, deleteToDo }) {
  return (
    <li>
        <label>
          <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleToDo(e.target.checked)}
          />
          {title}
          <button
          onClick={() => deleteToDo(id)}
          className="btn btn-danger">Delete</button>
        </label>
        </li>
  )
}