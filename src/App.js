import React, { Component } from 'react';
import AppBar from './frame/AppBar';
import Container from "./components/Container";


import './App.css';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div>
          <LoginForm/>
      </div>
    )
  }
}

export default App;
