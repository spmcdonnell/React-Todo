import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        const savedTodosExist = localStorage.getItem('todos') !== null;
        const savedTodos = savedTodosExist ? JSON.parse(localStorage.getItem('todos')) : [];

        console.log(savedTodos);

        this.setState({ todos: savedTodos });
    }

    updateLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    };

    addTodo = todo => {
        this.setState(
            {
                todos: [...this.state.todos, todo]
            },
            () => {
                this.updateLocalStorage();
            }
        );
    };

    toggleCompleted = id => {
        this.setState(
            {
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
            },
            () => {
                this.updateLocalStorage();
            }
        );
    };

    clearCompleted = () => {
        this.setState({ todos: this.state.todos.filter(todo => todo.completed === false) }, () => {
            this.updateLocalStorage();
        });
    };

    render() {
        return (
            <div>
                <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
                <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
            </div>
        );
    }
}

export default App;
