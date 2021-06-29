import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class HeaderComponent extends Component {
    render() {
        // Check if user is logged in for showing different menus
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    {/* Element for left hand side of header */}
                    <div><a href="/welcome/in28" className="navbar-brand">Todo List Application</a></div>
                    
                    {/* Element for right hand side of the header */}
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todo List</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)