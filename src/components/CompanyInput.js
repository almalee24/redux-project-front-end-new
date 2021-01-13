import React from 'react';

class CompanyInput extends React.Component {

    state = {name: '', location: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.location]: event.target.value 
        })
    }

    render(){
        return (
            <div>
                <form>
                    <label>Company Name</label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    <label>Company Location</label>
                    <input type="text" placeholder="Location" value={this.state.location} name="location" onChange={this.handleChange}/><br/>
                </form>
            </div>
        )
    }
}

export default CompanyInput 