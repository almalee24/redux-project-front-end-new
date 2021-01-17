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
        <div className="sign-up-form">    
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" type="text" name="name" value={signupFormData.name} onChange={handleChange}/><br /><br />
                <input placeholder="Username" type="text" name="username" value={signupFormData.username} onChange={handleChange}/><br /><br />
                <input placeholder="Password" type="password" name="password" value={signupFormData.password} onChange={handleChange}/><br />  <br />    
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