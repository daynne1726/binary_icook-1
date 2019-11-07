import React, { Component } from 'react'
import '../App.css'
import LoginForm from './LoginForm'
import Footer from './Footer'
import SignUp from './SignUp'
import { Button,  } from 'semantic-ui-react'


// creating a class that will render either the class LoginForm or SignUp
class LoginSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      login: false
    }
  }

  signupHandler = (e) => {
    this.setState({ signup: true })
  }
  loginHandler = (e) => {
    this.setState({ login: true })
  }

  //this function is for the header  
  Header = () => (
    <div className="header">
      <nav>
       
          {/* adding the image logo */}
          <img className="logo" alt="joke" src={require('../photos/logo.png')} />
          <Button color='blue' onClick={e => this.signupHandler(e)}>Sign Up</Button> |
          <Button color='red' onClick={e => this.loginHandler(e)}>Log In</Button> |
       
      </nav>
    </div>
  )

  render() {
    // define the variables in constant
    const { signup, login } = this.state;
    // To display the Header And the class LoginForm 
    if (!signup) {
      return (
        <div>
          <this.Header />
          <LoginForm />
          <div>
            <Footer />
          </div>
        </div >
      )
      // if the page is on Login page 
    } if (login) {
      return (
        <div>
          <this.Header />
          <LoginForm />
          <div>
            <Footer />
          </div>
        </div >
      )
    }
    // display the class SignUp when button sign up clicked
    else {
      return (
        <div>
          <this.Header />
          <SignUp />
          <div>
            <Footer />
          </div>
        </div>
      )

    }
  }
}

export default LoginSignUp
