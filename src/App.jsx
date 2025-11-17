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
  </>
)
}