import React from 'react';
import styled, { css } from 'styled-components';

const List = styled.ul`
  margin: 20px;
  padding: 0;
`;

const Label = styled.label`
  position: relative;

  &:before {
    border: 1px solid #ccc;
    border-radius: 3px;
    content: '';
    display: inline-block;
    height: 15px;
    margin-right: 5px;
    width: 15px;
  }

  ${props =>
    props.done &&
    css`
      &:after {
        border-left: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        content: '';
        display: inline-block;
        height: 5px;
        left: 3px;
        position: absolute;
        top: 4px;
        transform: rotate(-45deg);
        width: 10px;
      }
    `}
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

const Task = styled.li`
  color: #abb7b7;
  list-style: none;
  padding: 10px 0;
  vertical-align: middle;
  ${props =>
    props.done
      ? css`
          text-decoration: line-through;
        `
      : css`
          text-decoration: none;
        `}

  & ~ & {
    border-top: 1px solid #ccc;
  }
`;

const TodoList = ({ todos, handleTodo }) => (
  <List>
    {todos.map(todo => (
      <Task key={todo.id} done={todo.completed}>
        <Label done={todo.completed}>
          <Checkbox onClick={handleTodo(todo.id)} /> {todo.text}
        </Label>
      </Task>
    ))}
  </List>
);

export default TodoList;
