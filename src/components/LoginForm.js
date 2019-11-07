import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid } from 'semantic-ui-react'
import swal from 'sweetalert';
import Dashboard from './Dashboard';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // for Log in,,, partial hard code ^_^
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
          label='Username'
          placeholder='Username'
          onChange={e => this.setState({ username: e.target.value })}
           />

        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          onChange={e => this.setState({ password: e.target.value })}
          />

        <Button content='Login' onClick={e => this.LoginHandler(e)} primary />
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
    const{login}=this.state;
    if (!login) {
      return (
        <div className="box"><this.LoginForm />
        </div>
      )
    }else{
      return(
        <Dashboard/>
      )
    }
   
       
      

    
  }
}
export default LoginForm