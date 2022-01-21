import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <header>
                <div class="wrap header--flex">
                    <h1 class="header--logo">
                        <a href="/">Courses</a>
                    </h1>
                    <nav>
                        {/** IF SIGNED OUT */}
                        <ul class="header--signedout">
                            <li><a href="/">Sign Up</a></li>
                            <li><a href="/">Sign In</a></li>
                        </ul>
                        {/** IF SIGNED IN */}
                        <ul class="header--signedin">
                            <li>Welcome, Name!</li>
                            <li><a href="/">Sign Out</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

}