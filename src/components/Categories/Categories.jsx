import React from "react";
import headphone from './RAW/3.jpg'
import './Categories.light.css'
const Categories = () => {
    return (
        <div className="category-grid">
            <img src={headphone} alt="" />
            <div className="category-label">
                <span>foo</span>
            </div>
        </div>
    )
}

export default Categories