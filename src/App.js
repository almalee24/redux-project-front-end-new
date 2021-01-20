import React from 'react';
import CompaniesContainer from './containers/CompaniesContainer'
import { connect } from 'react-redux'
import {Switch, Route, withRouter } from 'react-router-dom';
import Login from '../src/components/Login'
import Home from '../src/components/Home'
import Signup from '../src/components/Signup'
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
          { loggedIn ? <NavBar /> : <Home/> }
          <CompaniesContainer user={this.props.current_user}/>
          <CartContainer />
          <Switch>
            <Route exact={true} path='/login' component={Login} />
            <Route exact={true}  path='/signup' render={({history}) =><Signup history={history}/>}/>
          </Switch>
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
