import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <LoginForm login = {this.props.login}/>
      </div>
    )
  }
}

export default App;
