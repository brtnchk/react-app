import React from 'react';
import TodoListItem from "./todo-list-item";

const TodoLst = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink" /></li>
            <li><TodoListItem label="Eat" /></li>
            <li><TodoListItem label="Repeat" /></li>
        </ul>
    )
}

export default TodoLst;