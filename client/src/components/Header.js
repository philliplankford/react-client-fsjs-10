import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo">
                        <a href="/">Courses</a>
                    </h1>
                    <nav>
                        {/** IF SIGNED OUT */}
                        <ul className="header--signedout">
                            <li><a href="/">Sign Up</a></li>
                            <li><a href="/">Sign In</a></li>
                        </ul>
                        {/** IF SIGNED IN */}
                        <ul className="header--signedin">
                            <li>Welcome, Name!</li>
                            <li><a href="/">Sign Out</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }

}