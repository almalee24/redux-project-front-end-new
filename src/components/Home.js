import React, { Component } from 'react';
import logo from '../img/trollywingz.png'
import Signup from '../components/Signup';
import Login from '../components/Login'
import { withRouter } from 'react-router'

class Home extends Component {
  

  constructor(props){
    super(props)
    this.state = {
      info: <Signup history={this.props.history}/>,
      title: "Avaliable in Location!",
      subtitle: "Create an account to start shopping",
      button: "Log in",
      question: "Already have an account?",
      history: this.props
    }

    this.baseState = this.state
  }

  updateContent = (event) => {

    if(this.state.button === "Log in"){
      this.setState({
        info: <Login history={this.props.history}/>,
        title: "Welcome back",
        subtitle: "Log in with your username and password",
        button: 'Sign up',
        question: "Don't have an account?"
      })
    }else{
      this.setState(this.baseState)
    }
  }
  
  render(){
    return (
    <div className="home-bg">
      <div className="sign-up-bttn">
        <div className="button-div">
          <button className="login-button" onClick={this.updateContent}>{this.state.button}</button>
        </div>
      </div>
      <div className="sign-up">
        <div className="sing-up-info">
            <div className="home-logo">
              <img src={logo} alt="logo"></img>
            </div>
            <h1>{this.state.title}</h1>
            <h2>{this.state.subtitle}</h2>
        </div>
        {this.state.info}
        <p>{this.state.question}<button onClick={this.updateContent}> {this.state.button}</button></p>
      </div>
    </div>
  );
  }
};

export default withRouter(Home);