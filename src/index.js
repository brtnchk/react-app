import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import FilterPanel from "./components/filter-panel";

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

ReactDOM.render(<App />, document.getElementById('root'))