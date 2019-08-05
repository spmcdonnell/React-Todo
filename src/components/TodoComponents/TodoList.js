import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const allTodos = this.props.todos.map(todo => <Todo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} />);

        return (
            <div>
                <h2>ToDos:</h2>
                {allTodos}
            </div>
        );
    }
}

export default TodoList;
