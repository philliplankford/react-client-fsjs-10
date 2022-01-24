import React, { Component } from 'react';

export default class UserSignIn extends Component {
    render () {

        return (
            <React.Fragment>
                <div className="form--centered">
                    <h2>Sign In</h2>

                    <form>
                        <label for="emailAddress">Email Address</label>
                        <input id="emailAddress" name="password" type="password" value=""></input>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" value=""></input>
                        <button className="button" type="submit">Sign In</button>
                        <button className="button button-secondary" onClick="event.preventDefault(); location.href='/';"></button>
                    </form>
                    <p>Don't have a user account? Click <a href="/">here to sign up</a>!</p>
                </div>
            </React.Fragment>
        )
    }
}