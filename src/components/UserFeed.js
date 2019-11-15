import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from './SignUp'
import { Button, } from 'semantic-ui-react'

class UserFeed extends Component {


    Header = () => (
        <Router>
            <div className="header">
                <nav>
                    {/* adding the image logo */}
                    <img className="logo" alt="joke" src={require('../photos/logo.png')} />

                    <Link to={'/signup'} ><Button color='blue' >Sign Up</Button></Link>
                </nav>
                <Switch>

                    <Route path='/signup' component={SignUp} />
                </Switch>
            </div>
        </Router>
    )

    render() {
        return (
            <div className="containeruser">
                <this.Header />
            </div>
        )
    }
}
export default UserFeed;