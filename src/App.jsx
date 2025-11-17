import "./styles.css"

export default function App() {
return (
  <>
    <form className="new-form-item">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">To Do list</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
          <button className="btn btn-danger">Delete</button>
        </label>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item 2
          <button className="btn btn-danger">Delete</button>
        </label>
      </li>
    </ul>
  </>
)
}