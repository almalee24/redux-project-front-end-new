import React from 'react';
import {connect} from 'react-redux'
import CompaniesContainer from './containers/CompaniesContainer'
class App extends React.Component {

  render(){
    return (
      <div className="App">
        <CompaniesContainer/>
      </div>
    );
  }
}


export default App;
