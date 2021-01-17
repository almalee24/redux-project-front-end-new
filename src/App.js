import React from 'react';
import CompaniesContainer from './containers/CompaniesContainer'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Login from '../src/components/Login'
import Home from '../src/components/Home'
import Signup from '../src/components/Signup'
import NavBar from '../src/components/NavBar'
import { getCurrentUser } from '../src/actions/currentUser'
class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const loggedIn = this.props
    debugger
    return (
        <div className="App">
        { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
          <CompaniesContainer />
          <BrowserRouter>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' render={({history}) =><Signup history={history}/>}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
