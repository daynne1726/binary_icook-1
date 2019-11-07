import React, { Component } from 'react'
import '../App.css'
import LoginForm from './LoginForm'
import Header from './Header'
import Footer from './Footer'

class LoginSignUp extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <LoginForm />
        </div>
        <Footer />
      </div>
    )
  }
}
export default LoginSignUp