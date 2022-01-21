import React, { Component } from 'react';

export default class UserSignIn extends Component {
    render () {

        return (
            <main>
                <div class="form--centered">
                    <h2>Sign In</h2>

                    <form>
                        <label for="emailAddress">Email Address</label>
                        <input id="emailAddress" name="password" type="password" value=""></input>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" value=""></input>
                        <button class="button" type="submit">Sign In</button>
                        <button class="button button-secondary" onclick="event.preventDefault(); location.href='/';"></button>
                    </form>
                    <p>Don't have a user account? Click <a href="/">here to sign up</a>!</p>
                </div>
            </main>
        )
    }
}