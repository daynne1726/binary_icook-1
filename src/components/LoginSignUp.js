import React, { Component } from 'react'
import '../App.css'
import LoginForm from './LoginForm'
import Footer from './Footer'
import SignUp from './SignUp'
import { Button } from 'semantic-ui-react'



class LoginSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      signup: false
    }
  }

  loginHandler = (e) => {
    const{login} = this.state;
    this.setState({login:true})
  }
  singupHandler = (e) => {
    this.setState({signup: true})
  }


  render() {
    if (login) {
      return (
        <div>
          <div className="header">
            <nav>
              <img className="logo" alt="joke" src={require('../photos/logo.png')} />
              <Button color='blue' onClick={e => this.loginHandler(e)}>LogIn</Button> |
              <Button color='red' onClick={e => this.singupHandler(e)}>SignUp</Button>
            </nav>
          </div>
          <div>
            <LoginForm />
          </div>

          <Footer />
        </div>
      )
    } else {
      <div>
        <SignUp />
      </div>

    }


  }
}
export default LoginSignUp