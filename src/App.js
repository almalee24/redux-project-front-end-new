import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CompaniesContainer from './containers/company/CompaniesContainer'
class App extends React.Component {

  render(){
    return (
        <div className="App">
          <CompaniesContainer />
        </div>
    );
  }
}


export default App;
