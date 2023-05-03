const Todo = ({ todo, deleteTodo}) => {
  return (
    <li>
      {todo}
      <button onClick={() => deleteTodo(todo)}>x</button>
    </li>
  )
}

export default Todo;