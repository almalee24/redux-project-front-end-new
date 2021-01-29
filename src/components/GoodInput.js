import React from 'react'
import {connect} from 'react-redux'
import {addGood} from '../actions/addGood'

class GoodsInput extends React.Component {
    state = {
        company_id: '',
        name: '',
        weight: '',
        price: '',
        image: '',
        image_two: '',
        image_three: '',
        description: '',
        sale: ''
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
          [event.target.weight]: event.target.value,
          [event.target.price]: event.target.value,
          [event.target.image]: event.target.value,
          [event.target.image_two]: event.target.value,
          [event.target.image_three]: event.target.value,
          [event.target.description]: event.target.value,
          [event.target.sale]: event.target.value,
          [event.target.company_id]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addGood(this.state)
        this.setState({
            name: '',
            weight: '',
            price: '',
            image: '',
            image_two: '',
            image_three: '',
            description: '',
            sale: '',
            company_id: ''

        })
      }
    
      render() {
        let companies = this.props.companies
         
        return (
          <div>
            <h2>Add goods to exsiting company</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Company</label>
                <select name="company_id" onChange={this.handleChange} value={this.state.company_id}>{companies.map(x => <option key={x.id} value={x.id} >{x.name}</option>)}</select><br/>
                <label>Name</label>
                <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                <label>Description</label>
                <input type="text" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange}/><br/>
                <label>Price</label>
                <input type="text" placeholder="Price" value={this.state.price} name="price" onChange={this.handleChange}/><br/>
                <label>Weight</label>
                <input type="text" placeholder="Weight" value={this.state.weight} name="weight" onChange={this.handleChange}/><br/>
                <label>Image</label>
                <input type="text" placeholder="Image" value={this.state.image} name="image" onChange={this.handleChange}/><br/>
                <label>Second Image</label>
                <input type="text" placeholder="Second Image" value={this.state.image_two} name="image_two" onChange={this.handleChange}/><br/>
                <label>Third Image</label>
                <input type="text" placeholder="Third Image" value={this.state.image_three} name="image_three" onChange={this.handleChange}/><br/>
                
                <input type='submit' />
            </form>
          </div>
        )
    
      }
}

const mapStateToProps = state => {
    
    return {
        companies: state.companyReducer
    }
}

export default connect(mapStateToProps, {addGood})(GoodsInput)