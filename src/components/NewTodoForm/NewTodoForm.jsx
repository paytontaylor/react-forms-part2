import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo)
    setTodo("")
  }

  const handleChange = e => {
    setTodo(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input type="text" id="newTodo" name="newTodo" value={todo} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default NewTodoForm;