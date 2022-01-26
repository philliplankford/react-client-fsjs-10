import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withNavigate } from '../Router';
import Form from './Form';

export default class UserSignIn extends Component {

    state = {
        username: '',
        password: '',
        errors: [],
    }

    render () {

        const {
            username,
            password,
            errors,
        } = this.state;

        return (
            <React.Fragment>
                <div className="form--centered">
                    <h2>Sign In</h2>
                    <Form
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign In"
                        elements={() => (
                            <React.Fragment>
                                <input 
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={username}
                                    onChange={this.change}
                                    placeholder="User Name"
                                />
                                <input 
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.change}
                                    placeholder="Password"
                                />
                            </React.Fragment>
                        )}
                    />

                    {/* <form>
                        <label for="emailAddress">Email Address</label>
                        <input id="emailAddress" name="password" type="password" value=""></input>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" value=""></input>
                        <button className="button" type="submit">Sign In</button>
                        <button className="button button-secondary" onClick="event.preventDefault(); location.href='/';"></button>
                    </form> */}
                    <p>Don't have a user account? Click <a href="/">here to sign up</a>!</p>
                </div>
            </React.Fragment>
        );
    }

    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    submit = () => {
        const { context } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/authenticated'} };
        const { username, password } = this.state;

        context.actions.signIn(username, password)
            .then( user => {
                if (user === null) {
                    this.setState(() => {
                        return { errors: [`Sign-in was unsuccessful` ]};
                    });
                } else {
                
                }
            })
    }

    cancel = () => {
    
    }
}