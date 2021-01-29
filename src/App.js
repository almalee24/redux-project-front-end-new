import React from 'react';
import CompaniesContainer from './containers/CompaniesContainer'
import { connect } from 'react-redux'
import {withRouter, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import NavBar from '../src/components/NavBar'
import { getCurrentUser } from '../src/actions/currentUser'
import CartContainer from './containers/CartContainer'
import Admin from './components/Admin'

class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    
    const loggedIn = this.props.loggedIn
    const user = this.props.current_user
  
    return (
        <div className="App">
          { loggedIn ? <><NavBar /> 
          <CompaniesContainer user={user}/>
          <CartContainer /></>
          : <>
          <Home/> 
          </>
          }
          {user && !!user.admin ? <Route exact={true} path='/admin' render={(routerProps) => <Admin />} /> : <Home />}
          
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
