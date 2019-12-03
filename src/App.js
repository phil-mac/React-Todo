import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

const defaultTodos = [
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
      todos: this.getFromStorage()
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

    this.saveToStorage([...this.state.todos, newTodo]);
  }

  toggleCompleted = toggledTodo => {
    const index = this.state.todos.indexOf(toggledTodo);

    const tempTodos = this.state.todos;
    tempTodos[index] = {...toggledTodo, completed: !toggledTodo.completed};

    this.setState({
      todos: tempTodos
    })

    this.saveToStorage(tempTodos);
  }

  clearCompleted = () => {
    const filteredTodos = this.state.todos.filter(item => item.completed === false);

    this.setState({
      todos: filteredTodos
    })

    this.saveToStorage(filteredTodos);
  }

  saveToStorage = (todosToSave) => {
    localStorage.setItem("todos", JSON.stringify(todosToSave));
  }

  getFromStorage = () => {
    if (typeof(Storage) !== "undefined" && JSON.parse(localStorage.getItem("todos")) !== null) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return defaultTodos;
    }
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
