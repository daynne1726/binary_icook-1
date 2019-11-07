import React from "react";
import { Button } from 'semantic-ui-react'
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";


function Header() {
    return (
        <div className="header">
            <nav>
                <img className="logo" alt="joke" src={require('../photos/logo.png')} />
                <Button color='blue' onClick={LoginForm}>LogIn</Button> |
                <Button color='red' onClick={SignUp}>SignUp</Button>
            </nav>
        </div>


    );
}
export default Header;