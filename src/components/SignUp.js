import React,{Component} from 'react'
import '../App.css'
import { Button, Form, Grid} from 'semantic-ui-react'

class SignUp extends Component {

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

        <Button content='Sign Up' primary />
      </Form>
    </Grid.Column>
  )

    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default SignUp;