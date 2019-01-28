import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Title from './components/Title';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: 'Arial, sans-serif';

    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.main`
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  margin: 50px auto 0;
  padding: 20px;
  width: 500px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const todo = e.target.todo;

    if (!todo.value) {
      return;
    }

    const newTodo = {
      id: this.state.todos.length + 1,
      text: todo.value,
      completed: false,
    };

    this.setState(
      ({ todos }) => ({
        todos: [...todos, newTodo],
      }),
      () => {
        todo.value = '';
        todo.focus();
      }
    );
  };

  handleTodo = id => () =>
    this.setState(({ todos }) => ({
      todos: todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    }));

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Title>Styled Todo</Title>
        <TodoList todos={this.state.todos} handleTodo={this.handleTodo} />
        <Form handleSubmit={this.handleSubmit} />
      </Wrapper>
    );
  }
}

export default App;
