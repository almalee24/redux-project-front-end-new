import React from 'react';
import {connect} from 'react-redux'
import {addCompany} from '../actions/addCompany'

class CompanyInput extends React.Component {
    state = {
        name: '',
        location: '',
        image_logo: '',
        image_background: ''
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.location]: event.target.value,
            [event.target.image_logo]: event.target.value,
            [event.target.image_background]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCompany(this.state)
        this.setState({
            name: '',
            location: '',
            image_logo: '',
            image_background: ''
        })
    }

    render(){
        return (
            <div>
                <h2>Submit a new Company</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    <label>Location</label>
                    <input type="text" placeholder="Location" value={this.state.location} name="location" onChange={this.handleChange}/><br/>
                    <label>Logo</label>
                    <input type="text" placeholder="Logo" value={this.state.image_logo} name="image_logo" onChange={this.handleChange}/><br/>
                    <label>Background</label>
                    <input type="text" placeholder="Background" value={this.state.image_background} name="image_background" onChange={this.handleChange}/><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {addCompany})(CompanyInput)