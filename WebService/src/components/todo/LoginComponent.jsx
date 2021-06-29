import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    loginClicked(e){
        // Only valid right now is test
        if(this.state.username==='test' && this.state.password==='test'){
            AuthenticationService.registerSuccessfulLogin(this.state.username)
            this.props.history.push(`/welcome/${this.state.username}`)
         }
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render(){
        return(
            <div>
                {this.state.hasLoginFailed && <div className="alert alert-info">Invalid Credentials</div>}
                <h1 className="login-title">Login</h1>
                <div className="login-entry">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {this.state.showSuccessMessage && <div>Success!</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>  
                </div>
                <button className="login-button btn btn-success bg-primary" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

export default LoginComponent