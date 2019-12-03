import React from 'react';

import './Todo.css';

class Todo extends React.Component{

    handleToggle = () => {
        this.props.toggleCompleted(this.props.item);
    }

    render(){
        return(
            <li onClick={this.handleToggle} className={this.props.item.completed ? 'completedTodo' : 'incompletedTodo'}>
                {this.props.item.task}
            </li>
        )
    }
}

export default Todo;