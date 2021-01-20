import React from 'react';
import {connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const addToCart = ({ loginFormData, updateLoginForm, login, history }) => {
    debugger
}


const mapStateToProps = state => {
    return{
    }
  }
  
  export default connect(mapStateToProps )(addToCart)