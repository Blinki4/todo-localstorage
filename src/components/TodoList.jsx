import React from 'react';
import ToDoItem from "./UI/ToDoItem/ToDoItem";

const TodoList = ({list, deleteTodo, sortList}) => {
    return (
        <div className='todo__list-wrapper'>
            <ul className='todo__list'>
                {list.map((todo) =>
                    <li key={todo.id} className='todo__item'>
                        <ToDoItem sortList={sortList} deleteTodo={deleteTodo} todo={todo}/>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TodoList;