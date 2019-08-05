import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    name: 'Organize Garage',
                    id: 1528817077286,
                    completed: false
                },
                {
                    name: 'Take Out Trash',
                    id: 1528317077286,
                    completed: true
                }
            ]
        };
    }

    addTodo = todo => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };

    toggleCompleted = () => {};

    clearCompleted = () => {
        this.setState({ todos: this.state.todos.filter(todo => todo.completed === false) });
    };

    render() {
        return (
            <div>
                <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
