import React from 'react';
import './Todo.css';

const Todo = ({ todo, toggleCompleted }) => {
    return (
        <div className={`todo ${todo.completed ? 'todo-completed' : ''}`} onClick={() => toggleCompleted(todo.id)}>
            <h3>{todo.name}</h3>
        </div>
    );
};

export default Todo;
