// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component{

    render(){
        return(
            <div className='todoList'>
                <h1>Could-Do List</h1>
                {
                    this.props.todos.map(item => {
                        return(
                            <Todo item={item} key={item.id} toggleCompleted={this.props.toggleCompleted}/>
                        )
                    })
                }
                <TodoForm addTodo={this.props.addTodo} clearCompleted={this.props.clearCompleted}/>
            </div>
        )
    }
}

export default TodoList;