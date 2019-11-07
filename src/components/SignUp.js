import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid } from 'semantic-ui-react'

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      fname:"",
      lname:'',
    }
  }

  SignUpForm = () => (
    <Grid.Column>
      <Form>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='First Name'
          placeholder='First Name'
          required
        />
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Last Name'
          placeholder='Last Name'
          required
        />
        <label><b>Gender</b>
          <select >  
          <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <Form.Input
          icon='mail'
          iconPosition='left'
          label='Email'
          type='email'
          required
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          required
        />
        <Button content='Sign Up' primary />
      </Form>
    </Grid.Column>
  )

  render() {
    return (
      <div className="boxsign">
        <this.SignUpForm />
      </div>
    )
  }
}
export default SignUp;