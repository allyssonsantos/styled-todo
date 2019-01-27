import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: this.state.todos.length + 1,
      text: e.target.todo.value,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  handleTodo = id => e =>
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
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
      <div>
        <Form handleSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos} handleTodo={this.handleTodo} />
      </div>
    );
  }
}

export default App;
