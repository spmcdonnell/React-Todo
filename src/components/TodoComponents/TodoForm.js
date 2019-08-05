import React, { Component } from 'react';
import uuid from 'uuid';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: ''
        };
    }

    handleInput = e => {
        this.setState({ userInput: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.addTodo({ name: this.state.userInput, id: uuid(), completed: false });

        this.setState({ userInput: '' });
    };

    render() {
        return (
            <>
                <form>
                    <input onChange={this.handleInput} type="text" value={this.state.userInput} placeholder="Add a ToDo" />
                    <button onClick={this.handleSubmit}>Add</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </>
        );
    }
}

export default TodoForm;
