import React, { Component } from 'react';
import LoginSignUp from './components/LoginSignUp'
import './App.css';
import SignUp from './components/SignUp';
import { Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container" >
          <LoginSignUp />
        </div>
      </div>
    )
  }
}

export default App;
