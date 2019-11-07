import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
          onChange={e => this.setState({ username: e.target.value })} />

        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          onChange={e => this.setState({ password: e.target.value })} />

        <Button content='Login' primary />
      </Form>
    </Grid.Column>
  )
  render() {
    return (
      <div className="box"><this.LoginForm />
        <div>{this.state.username}</div>
        <div>{this.state.password}</div>
      </div>

    )
  }
}
export default LoginForm