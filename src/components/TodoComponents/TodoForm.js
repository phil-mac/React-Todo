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
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        })
    }

    // toggleShowCompleted = () => {
    //     this.props.showCompleted();
    // }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <h3 >TodoForm</h3> */}
                    <input type='text' placeholder='New Todo'  onChange={this.handleChange} value={this.state.newTodo}/>
                    <button type='submit'>Add</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
            

        )
    }
}

export default TodoForm;