import React from 'react';
import {connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  debugger
    const handleChange = (event) => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
        
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        login(loginFormData, history)
    }

        return (
          <div className="sign-up-form">       
              <form onSubmit={handleSubmit}>
                  <input placeholder="username" type="text" name="username" value={loginFormData.username} onChange={handleChange} /><br /><br />
                  <input placeholder="password" type="password" name="password" value={loginFormData.password} onChange={handleChange} /> <br /><br />       
                  <input type="submit" value="Log In" />      
              </form>
          </div>
        );
}

const mapStateToProps = state => {
  debugger
  return{
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)