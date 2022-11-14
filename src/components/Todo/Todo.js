import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const { userId, id, title } = props.todo;
    return (
        <div className='todo'>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <h3>{title}</h3>
        </div>
    );
};

export default Todo;