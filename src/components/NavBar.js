import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/trollywingz.png'
import { connect } from 'react-redux'
import Logout from './Logout'
import cart from '../img/cart.svg'
import Cart from '../components/Cart'

const NavBar = ({ currentUser, loggedIn }) => {
    const [open, setOpen] = React.useState(false)
    const [showCart, setShowCart] = React.useState(false)

    const drop = React.useRef(null)

    const [scrolled, setScrolled] = React.useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    function handleClick(e) {
        if (!e.target.closest("drop-down-wrapper") && open){
            setOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.addEventListener("click", handleClick)
        return () => {
            document.addEventListener("click", handleClick)
        }
    })

    let navbarClasses = ["navbar"] 

    if(scrolled){
        navbarClasses.push('scrolled')
    }

    

    return (
        <header className={navbarClasses.join(" ")}>
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
                <button className="cart" onClick={handleClick}> 
                        <img src={cart} alt="cart-img"></img>
                        <h3>0</h3>
                </button>
            </div>
            <div>
                {showCart &&  <Cart onClose={() => setShowCart(false)}> {
                    closeCart =>
                        <div>
                            <input/>
                            <button onClick={closeCart}>
                                Submit
                            </button>
                        </div>
                }
                </Cart>
                }
            </div>
        </header>
    )
}

const mapStateToProps = ({ currentUser }) => {
  
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }
  
  export default connect(mapStateToProps)(NavBar)