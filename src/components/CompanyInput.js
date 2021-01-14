import React from 'react';
import {connect} from 'react-redux'
import {addCompany} from '../actions/addCompany'

class CompanyInput extends React.Component {
    state = {
        name: '',
        location: ''
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.location]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCompany(this.state)
        this.setState({
            name: '',
            location: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Company Name</label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    <label>Company Location</label>
                    <input type="text" placeholder="Location" value={this.state.location} name="location" onChange={this.handleChange}/><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {addCompany})(CompanyInput)