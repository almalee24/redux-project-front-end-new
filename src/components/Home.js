import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/trollywingz.png'
import Signup from '../components/Signup';

const Home = () => {
  
  return (
    <div className="home-bg">
      <div className="sign-up-bttn">
        <div className="button-div">
          <button className="login-button"><Link to='/login' replace>Login</Link></button>
        </div>
      </div>
      <div className="sign-up">
        <div className="sing-up-info">
            <div className="home-logo">
              <img src={logo} alt="logo"></img>
            </div>
            <h1>Avaliable in Location!</h1>
            <h2>Create an account to start shopping</h2>
        </div>
        <Signup />
        <p>Already have an account?<Link to='/login' > Log In</Link></p>
      </div>
    </div>
  );
};

export default Home;