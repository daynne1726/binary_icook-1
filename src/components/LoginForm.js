import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid } from 'semantic-ui-react'
import swal from 'sweetalert';
import UserFeed from './UserFeed';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from './SignUp';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // for Log in,,, partial hard code
      uname: 'binary@gmail.com',
      pass: 'binary',
      login: false
    }
  }
  LoginForm = () => (
    <Grid.Column>
      <Form>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Username/Email'
          placeholder='Username/Email'
          onChange={e => this.setState({ username: e.target.value })}
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          onChange={e => this.setState({ password: e.target.value })}
        />
        <Router>          
            <Link to={'/userfeed'}><Button content='Login' onClick={e => this.LoginHandler(e)} primary /></Link>          
            <Link to={'/signup'} ><Button color='blue' >Sign Up</Button></Link>
            <Switch>
              <Route exact path='/userfeed' component={UserFeed}/>
              <Route path='/signup' component={SignUp} />
            </Switch>
        </Router>    
      </Form>
    </Grid.Column>
  )
  LoginHandler = (e) => {
    const { username, password, pass, uname } = this.state;
    if (username === uname && pass === password) {
      this.setState({ login: true })
      swal("Succes!", "You are are now Logged in!", "success");
      console.log(this.state.login)
    }
    else {
      this.setState({ login: false })
      swal("Oops!", "Password or username is Incorrect!", "error");
    }
  }

  render() {
    const { login } = this.state;
    if (!login) {
      return (
        <div className="box"><this.LoginForm /> 
        </div>
      )
    } else {
      return (      
        <UserFeed />
      )
    }
  }
}
export default LoginForm