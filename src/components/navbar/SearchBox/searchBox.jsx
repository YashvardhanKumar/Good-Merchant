import StyledButton from '../../styledbutton/StyledButton'
import './searchBox.css'
import React from 'react'

const SearchBox = () => {
    return (
        <form action="#" method="post" className="searchBox controls">
                <input type="text" className="input" placeholder=" " />
                <label for="search" className="label-1">
                    <span className="input-content">Search</span>
                </label>
            <StyledButton buttonText={
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1C0C5B">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            } />
            <a className='image-search' href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1C0C5B">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M18 15v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3.02c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1s-1 .45-1 1zm-2.5 3H6.52c-.42 0-.65-.48-.39-.81l1.74-2.23c.2-.25.58-.26.78-.01l1.56 1.88 2.35-3.02c.2-.26.6-.26.79.01l2.55 3.39c.25.32.01.79-.4.79zm3.8-9.11c.48-.77.75-1.67.69-2.66-.13-2.15-1.84-3.97-3.97-4.2C13.3 1.73 11 3.84 11 6.5c0 2.49 2.01 4.5 4.49 4.5.88 0 1.7-.26 2.39-.7l2.41 2.41c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42l-2.41-2.4zM15.5 9C14.12 9 13 7.88 13 6.5S14.12 4 15.5 4 18 5.12 18 6.5 16.88 9 15.5 9z" />
                </svg>
            </a>
        </form>
    )
}

export default SearchBox