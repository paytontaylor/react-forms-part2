import { useState } from "react";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos => ([...todos, newTodo]))
  }

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter(t => t !== todo);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
      { todos.map(todo => <Todo key={todo} todo={todo} deleteTodo={deleteTodo} />) }
      </ul>
    </div>
  )
}

export default TodoList;