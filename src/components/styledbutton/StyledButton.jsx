import './StyledButton.css'

const StyledButton = (props) => {
    return (
        <button className='btn'>{props.buttonText}</button>
    )
}

export default StyledButton