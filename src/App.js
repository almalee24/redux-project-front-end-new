import React from 'react';
import CompaniesContainer from './containers/CompaniesContainer'
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom';
import Home from '../src/components/Home'
import NavBar from '../src/components/NavBar'
import { getCurrentUser } from '../src/actions/currentUser'
import CartContainer from './containers/CartContainer'

class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const loggedIn = this.props.loggedIn
    return (
        <div className="App">
          { loggedIn ? <><NavBar /> 
          <CompaniesContainer user={this.props.current_user}/>,
          <CartContainer /></>
          : <>
          <Home/> 
          </>
          }
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    current_user: state.currentUser,
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
