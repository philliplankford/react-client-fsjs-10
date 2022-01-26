import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
        return (
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo">
                        <Link to="/Courses">Courses</Link>
                    </h1>
                    <nav>
                        {/** IF SIGNED OUT */}
                        <ul className="header--signedout">
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/signin">Sign In</Link></li>
                        </ul>
                        {/** IF SIGNED IN */}
                        <ul className="header--signedin">
                            <li>Welcome, Name!</li>
                            <li><Link to="/signout">Sign Out</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
}