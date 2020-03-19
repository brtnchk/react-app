import React from "react";

import AppHeader from "../app-header/";
import FilterPanel from "../filter-panel";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";

import './index.css';

const App = () => {
    const todoData = [
        { label: 'Make awesome react app', important: true, id: 1 },
        { label: 'Drink coffee', important: false, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ]
    return (
        <div className="container">
            <AppHeader />
            <div className="input-group filter-panel">
                <FilterPanel />
                <SearchPanel />
            </div>
            <TodoList todos={todoData} />
        </div>
    )
}

export default App;