import React, { Component } from "react";

import AppHeader from "../app-header/";
import FilterPanel from "../filter-panel";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import AddItemForm from "../add-item-form";

import './index.css';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Make awesome react app', important: true, id: 1 },
            { label: 'Drink coffee', important: false, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 },
        ]
    };
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }
        })
    };
    render() {
        return (
            <div className="container">
                <AppHeader />
                <div className="input-group filter-panel">
                    <FilterPanel />
                    <SearchPanel />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }
                />
                <AddItemForm />
            </div>
        )
    }
}