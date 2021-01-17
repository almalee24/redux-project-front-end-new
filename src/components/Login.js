import React, { Component } from 'react';
import {connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = ({ loginFormData, updateLoginForm, login, history }) => {
  
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
          <div>       
              <form onSubmit={handleSubmit}>
                  <input placeholder="username" type="text" name="username" value={loginFormData.username} onChange={handleChange} />
                  <input placeholder="password" type="password" name="password" value={loginFormData.password} onChange={handleChange} />         
                  <input type="submit" value="Log In" />      
              </form>
          </div>
        );
}

const mapStateToProps = state => {
  return{
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)