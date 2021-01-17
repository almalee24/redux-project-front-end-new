import React from 'react';
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"

const Signup = ({ signupFormData, updateSignupForm, signup, history }) =>  {

     const handleChange = (event) => {
        const {name, value} = event.target
        const updatedFormInfo = {
          ...signupFormData,
          [name]: value
        }
        updateSignupForm(updatedFormInfo)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        signup(signupFormData, history)
    };

    return (
        <div>    
            <form onSubmit={handleSubmit}>
                <input placeholder="username" type="text" name="username" value={signupFormData.username} onChange={handleChange}/>
                <input placeholder="email" type="text" name="email" value={signupFormData.email} onChange={handleChange}/>
                <input placeholder="password" type="password" name="password" value={signupFormData.password} onChange={handleChange}/>          
                <input type="submit" value="Sign Up"/>
            </form>
      </div>
    );
    
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)