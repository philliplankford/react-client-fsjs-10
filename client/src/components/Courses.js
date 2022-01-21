import React, { Component } from 'react';

export default class Courses extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="wrap main--grid">
                    <a className="course--module course--link" href="/">
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">Course Title</h3>
                    </a>
                </div>
            </React.Fragment>
        );
    }
}