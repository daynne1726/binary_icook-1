import React, {Component} from 'react'
import '../App.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            uname : '',
            pwd: '',
            login:false
        }
    }
    render(){
        return(
            <div>
                <label>Username</label>
                <input type="text" onChange={e => this.setState({uname:e.target.value})} required></input>
                {this.state.uname}
                <br></br>
                <label>Password</label>
                <input type="password" onChange={e => this.setState({pwd:e.target.value})} required></input>
                {this.state.pwd}
            </div>
        )
    }
}

export default Login;