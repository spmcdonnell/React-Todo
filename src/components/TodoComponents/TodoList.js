import React, { Component } from 'react';

import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />);
    }
}

export default TodoList;
