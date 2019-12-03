import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTodo: ''
        }
    }

    handleChange = e => {
        this.setState({
            newTodo: e.target.value
        })
    }

    handleSubmit = e => {
        if (this.state.newTodo !== ''){
            e.preventDefault();
            this.props.addTodo(this.state.newTodo);
            this.setState({
                newTodo: ''
            })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text' 
                    placeholder='New Item'  
                    onChange={this.handleChange} 
                    value={this.state.newTodo}
                    className='newTodoInput'
                    />
                    <button type='submit' className='customButton addButton'>Add</button>
                </form>
                <button onClick={this.props.clearCompleted} className='customButton clearButton'>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;