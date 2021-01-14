import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/trollywingz.png'

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <Link to="/stores"><img src={logo} alt="logo"></img></Link>
            </div>
            <ul>
                <li className="nav-links">
                <Link to='/stores'>Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar