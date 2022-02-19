import React from 'react'
// import './inputBox.css'
export default function InputBox(props) {
    return (
        <div className="searchBox controls">
            <input type={props.type} onChange={props.onChange} onFocus={props.onFocus} className="input" placeholder=" " />
            <label for={props.placeholder} className="label-1">
                <span className="input-content">{props.placeholder}</span>
            </label>
        </div>
    )
}