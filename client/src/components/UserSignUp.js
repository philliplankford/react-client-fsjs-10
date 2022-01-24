import React, { Component } from 'react';

export default class UserSignUp extends Component {
    render () {

        return(
            <div className="form--centered">
                <h2>Sign Up</h2>

                <form>
                    <label>First Name
                        <input id="firstName" name="firstName" type="text" value="" />
                    </label>
                    <label>Last Name
                        <input id="lastName" name="lastName" type="text" value="" />
                    </label>
                    <label>Email Address
                        <input id="emailAddress" name="emailAddress" type="email" value="" />
                    </label>
                    <label>Password
                        <input id="password" name="password" type="password" value="" />
                    </label>
                    <button className="button" type="submit">Sign Up</button>
                    <button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button>
                </form>
                <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
            </div>
        );
    }
}