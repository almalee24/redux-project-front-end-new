import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCompanies} from '../actions/fetchCompanies'
import Companies from '../components/Companies'
import CompanyInput from '../components/CompanyInput'
import CompanyShow from '../components/CompanyShow'
import NavBar from '../components/NavBar'
import Dashboard from '../components/Dashboard/Dashboard'
import Preferences from '../components/Preferences/Preferences'
import '../App.css'
class CompaniesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchCompanies()
    }

    render(){
        return (
            <div className="wrapper">
                <NavBar />
                <Switch>
                    <Route path='/stores/new' component={CompanyInput}/>
                    <Route path='/stores/:id/storefront' render={(routerProps) => <CompanyShow {...routerProps} companies={this.props.companies.companyReducer}/>} />
                    <Route path='/stores' render={(routerProps) => <Companies {...routerProps} companies={this.props.companies.companyReducer}/>}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/preferences' component={Preferences}/>
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