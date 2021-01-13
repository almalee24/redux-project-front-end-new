import React from 'react';
import {connect} from 'react-redux'
import {fetchCompanies} from '../../actions/fetchCompanies'
import Companies from '../../components/company/Companies'
import CompanyInput from '../../components/company/CompanyInput'

class CompaniesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCompanies()
    }

    render(){
        const companies = this.props.companies.companyReducer.map((company, i) => <Companies key={i} company={company} />)
        
        return (
            <div>
                <CompanyInput /><br/><br/>
                { companies } 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        companies: state
    }
}

export default connect(mapStateToProps, {fetchCompanies})(CompaniesContainer)