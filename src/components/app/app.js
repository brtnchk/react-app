import React, { Component } from "react";

import AppHeader from "../app-header/";
import FilterPanel from "../filter-panel";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import AddItemForm from "../add-item-form";

import './index.css';

export default class App extends Component {
    maxID = 100;
    state = {
        todoData: [
            this.createTodoItem('Make awesome react app'),
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Have a lunch')
        ],
        searchString: ''
    };
    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxID++
        }
    };
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }
        })
    };
    additem = (text) => {
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                this.createTodoItem(text)
            ];
            return {
                todoData: newArray
            }
        })
    };
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };
    onSearch = (searchString) => {
        this.setState({ searchString })
    };
    search(items, searchString) {
        if(searchString.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase()
                .includes(searchString.toLowerCase())
        })
    };
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }
    render() {
        const { todoData, searchString } = this.state;
        const filteredItems = this.search(todoData, searchString);
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        return (
            <div className="container">
                <AppHeader
                    doneCount={doneCount}
                    todoCount={todoCount}
                />
                <div className="input-group filter-panel">
                    <FilterPanel />
                    <SearchPanel
                        onSearch={ this.onSearch }
                    />
                </div>
                <TodoList
                    todos={ filteredItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <AddItemForm
                    addItem={ this.additem }
                />
            </div>
        )
    }
}