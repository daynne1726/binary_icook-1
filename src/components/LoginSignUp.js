import React, { Component } from 'react'
import '../App.css'
import LoginForm from './LoginForm'
import Footer from './Footer'
import SignUp from './SignUp'
import { Button } from 'semantic-ui-react'



class LoginSignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      login = false,
      signup = false
    }
  }


  render() {
    return (
      <div>
        <div className="header">
          <nav>
            <img className="logo" alt="joke" src={require('../photos/logo.png')} />
            <Button color='blue' onClick={this.setState.login = true}>LogIn</Button> |
	          <Button color='red' onClick={this.routeSignUp}>SignUp</Button>
          </nav>
        </div>
        <div>
          <LoginForm />
        </div>
        <div>
          <SignUp />
        </div>
        <Footer />
      </div>
    )
  }
}
export default LoginSignUp