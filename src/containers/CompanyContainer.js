import React from 'react';
import {connect} from 'react-redux'
import {fetchCompanies} from '../actions/fetchCompanies'
import Companies from '../components/Companies'
import CompanyInput from '../components/CompanyInput'

class CompaniesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCompanies()
    }

    render(){
        return (
            <div>
                <CompanyInput /><br/><br/>
                <Companies companies={this.props.companies}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        companies: state.companies 
    }
}

export default connect(mapStateToProps, {fetchCompanies})(CompaniesContainer)