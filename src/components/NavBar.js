import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/trollywingz.png'
import { connect } from 'react-redux'
import Logout from './Logout'
import cart from '../img/cart.svg'

const NavBar = ({ currentUser, loggedIn }) => {
    const [open, setOpen] = React.useState(false)
    const drop = React.useRef(null)

    // function handleClick(e){
    //     if (!e.target.closest(`${drop.current.className}`) && open){
    //         setOpen(false)
    //     }
    // }

    // React.useEffect(() => {
    //     document.addEventListener("click", handleClick)
    //     return () => {
    //         document.removeEventListener("click", handleClick)
    //     };
    // });

    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <Link to="/stores"><img src={logo} alt="logo"></img></Link>
            </div>
            <div className="nav-links">
                <div className="dropdown" ref={drop}>
                    <button onClick={() => setOpen(open => !open)} className="nav-button-header">
                            <p>Account</p>
                    </button>
                    { open &&
                    <div className="dropdown-button">
                        <ul className="dropdown-menu">
                            { loggedIn ? <><li className="liCls" id="loggedin">Hi, {currentUser.attributes.name}</li></> : null}
                            { loggedIn ? <><li className="liCls" ><Logout/></li></> : null} 
                        </ul>
                    </div> 
                    }
                    
                </div>
                <div className="cart"> 
                    <button>
                        <img src={cart}></img>
                        <h3>0</h3>
                    </button>
                </div>
            </div>
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