import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Todo from '../Todo/Todo';
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            <h1 className='bg-success p-3 rounded m-3 text-white'>All Todos: {todos.length}</h1>
            <div className='todos'>
                {
                    todos.map(todo => <Todo todo={todo} key={todo.id}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;