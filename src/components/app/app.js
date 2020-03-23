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
        ]
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
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)
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
                    <SearchPanel />
                </div>
                <TodoList
                    todos={this.state.todoData}
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