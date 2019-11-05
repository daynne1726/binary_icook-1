import React,{Component} from 'react'
import '../App.css'

class SignUp extends Component{
    constructor(props){
        super(props)
        this.setState = {
            fname :'',
            lname : '',
            email : '',
            username : '',
            pass : '',
            repass : '',
            signup : false
        }
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default SignUp;