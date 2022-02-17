import React from "react";
import StyledButton from "../styledbutton/StyledButton";
import './Categories.css'
const Categories = () => {
    return (
        <div className="category-grid">
            <div className="category-label">
                <span>foo</span>
            </div>
            <StyledButton buttonText={"Button"}/>
            {/* <img src={require("../../../../../Downloads/ML-Phone_laptop/dataset/test_set/headphones/8.jpg").default} alt="" /> */}
        </div>
    )
}

export default Categories