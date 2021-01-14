import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCompanies} from '../actions/fetchCompanies'
import Companies from '../components/Companies'
import CompanyInput from '../components/CompanyInput'
import CompanyShow from '../components/CompanyShow'
class CompaniesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCompanies()
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path='/stores/new' component={CompanyInput}/>
                    <Route path='/stores/:name' render={(routerProps) => <CompanyShow {...routerProps} companies={this.props.companies.companyReducer}/>} />
                    <Route exact path='/stores/home' render={(routerProps) => <Companies {...routerProps} companies={this.props.companies.companyReducer}/>}/>
                </Switch>
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