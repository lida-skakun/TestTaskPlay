import React from 'react';
import {render} from 'react-dom';
import styles from '../../styles/signing.css';

export default class Signing extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleEnterEmail = this.handleEnterEmail.bind(this);
        this.handleEnterPassword = this.handleEnterPassword.bind(this);
        this.validation = this.validation.bind(this);
        this.state = {
            email: "",
            password: "",
            disabled: "disabled"
        };
    }

    render () {
        return  <div className="new">
            <form>
                <h2> Sign in with your Account</h2>
                <label htmlFor="email">Email</label><br />
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    onChange={this.handleEnterEmail}
                /> 
                <br />
                <label htmlFor="password">Password</label><br />
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    required
                    onChange={this.handleEnterPassword}
                /> 
                <br />
                <input 
                    type="submit" 
                    value="Submit" 
                    id="submit" 
                    disabled={this.state.disabled}
                    onClick={this.handleButtonClick}
                />
            </form>
        </div>

   }

    handleEnterEmail(evt) {
        this.setState({email: evt.target.value})
        this.validation(this.state.password, evt.target.value)
    }

    handleEnterPassword(evt) {
        this.setState({password: evt.target.value})
        this.validation(evt.target.value, this.state.email)
    }

    validation (password, email) {
        if((password == "123") && (email == "user@com")) {
            this.setState({disabled: 0})
        } else {
            this.setState({disabled: "disabled"})
        }
    }

    handleButtonClick() {
        this.props.submitHandler(this.state);
    }
}