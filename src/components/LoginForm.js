import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid} from 'semantic-ui-react'

class LoginForm extends Component {

  LoginForm = () => (
    <Grid.Column>
      <Form>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Username'
          placeholder='Username'
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
        />

        <Button content='Login' primary />
      </Form>
    </Grid.Column>
  )
  render() {
    return (
      <div class = "box"><this.LoginForm/></div>
    )
  }
}
export default LoginForm