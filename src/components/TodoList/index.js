import React from 'react';

const TodoList = ({ todos, handleTodo }) => (
  <ul>
    {todos.map(todo => (
      <li
        onClick={handleTodo(todo.id)}
        key={todo.id}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

export default TodoList;
