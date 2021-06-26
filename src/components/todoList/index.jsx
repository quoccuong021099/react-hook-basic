import "./TodoList.scss";

function TodoList({ todos = [], onTodoClick = null }) {
  function handleClick(todo) {
    if (onTodoClick !== null) {
      onTodoClick(todo);
    }
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
