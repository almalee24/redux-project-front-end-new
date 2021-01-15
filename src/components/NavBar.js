import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/trollywingz.png'
import { connect } from 'react-redux'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <Link to="/stores"><img src={logo} alt="logo"></img></Link>
            </div>
            <ul>
                <li className="nav-links">
                { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout/></> : null}
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  
  export default connect(mapStateToProps)(NavBar)