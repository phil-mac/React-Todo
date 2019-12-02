import React from 'react';

import './Todo.css';

class Todo extends React.Component{

    handleToggle = () => {
        this.props.toggleCompleted(this.props.item);
    }

    render(){
        return(
            <div onClick={this.handleToggle} className={this.props.item.completed ? 'completedTodo' : 'incompletedTodo'}>
                {this.props.item.task}
            </div>
        )
    }
}

export default Todo;