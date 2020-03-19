import React from 'react';
import './filter-panel.css'

const FilterPanel = () => {
    return (
        <div className="btn-group filter-buttons">
            <button className="btn btn-secondary">All</button>
            <button className="btn btn-secondary">Active</button>
            <button className="btn btn-secondary">Done</button>
        </div>
    )
}

export default FilterPanel;