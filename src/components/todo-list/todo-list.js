import React from 'react';
import TodoListItem from "../todo-list-item";


const TodoLst = ({ todos }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProp } = item;
        return (
            <li key={ item.id } className="list-group-item">
                <TodoListItem { ...item } />
            </li>
        )
    })

    return (
        <ul className="list-group list-group-flush">
            { elements }
        </ul>
    )
}

export default TodoLst;