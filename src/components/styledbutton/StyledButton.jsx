import './StyledButton.css'
import React from 'react'

const StyledButton = (props) => {
    return (
        <button className={"btn " + props.className} onClick={props.onClick}>{props.children}</button>
    )
}

export default StyledButton