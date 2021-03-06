import './StyledButton.light.css'
import './StyledButton.dark.css'
import React from 'react'

const StyledButton = (props) => {
    return (
        <button className={"btn " + props.className} type={props.type} onFocus={props.onFocus} onClick={props.onClick}>{props.children}</button>
    )
}

export default StyledButton