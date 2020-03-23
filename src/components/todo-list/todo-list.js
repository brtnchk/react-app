import React, { Component } from 'react';
import TodoListItem from "../todo-list-item";

export default class TodoList extends Component {
    render() {
        const { todos, onDeleted } = this.props
        const elements = todos.map((item) => {
            const { id, ...itemProp } = item;
            return (
                <li key={ id } className="list-group-item">
                    <TodoListItem
                        { ...itemProp }
                        onDeleted={ () => onDeleted(id) }
                    />
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