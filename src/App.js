import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: 'Unpack from Trip',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Exercise',
    id: 1528817084358,
    completed: true
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }

  addTodo = newTodoTitle => {
    const newTodo = {
      task: newTodoTitle, 
      id: Date.now(), 
      completed: false
    } 

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = toggledTodo => {
    const index = this.state.todos.indexOf(toggledTodo);

    const tempTodos = this.state.todos;
    tempTodos[index] = {...toggledTodo, completed: !toggledTodo.completed};

    this.setState({
      todos: tempTodos
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} addTodo={this.addTodo} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
