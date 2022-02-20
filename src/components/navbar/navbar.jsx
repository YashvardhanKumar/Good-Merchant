import './navbar.light.css'
import './navbar.dark.css'
import SearchBox from './SearchBox/searchBox'
import NavItems from './NavItems/navItems'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import logo from '../../svgs/logo.light.svg'
import logodark from '../../svgs/logo.dark.svg'

const Navbar = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    return (<nav>
        <Link to="/home" alt="Good Merchant">
            <img src={logodark} />
        </Link>
        {(screenWidth > 600) && (
            <SearchBox toggleNav={props.toggleNav}/>
        )}
        <NavItems toggleNav={props.toggleNav} />
    </nav>
    )
}

export default Navbar