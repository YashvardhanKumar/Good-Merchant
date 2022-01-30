import './StyledButton.css'
import React from 'react'

const StyledButton = (props) => {
    return (
        <button className='btn'>{props.buttonText}</button>
    )
}

export default StyledButton