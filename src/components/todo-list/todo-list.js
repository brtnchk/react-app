import React, { Component } from 'react';
import TodoListItem from "../todo-list-item";

export default class TodoList extends Component {
    render() {
        const { todos } = this.props
        const elements = todos.map((item) => {
            const { id, ...itemProp } = item;
            return (
                <li key={ item.id } className="list-group-item">
                    <TodoListItem { ...itemProp } />
                </li>
            )
        });
        return (
            <ul className="list-group list-group-flush">
                { elements }
            </ul>
        )
    }
}