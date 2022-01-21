import React, { Component } from 'react';

export default class CourseDetail extends Component {
    render () {

        return (
            <React.Fragment>
                <div className="actions--bar">
                    <div className="wrap">
                        <a className="button" href="/">Update Course</a>
                        <a className="button" href="/">Delete Course</a>
                        <a className="button button-secondary" href="/">Return to List</a>
                    </div>
                </div>

                <div className="wrap">
                    <h2>Course Detail</h2>
                    <form>
                        <div className="main--flex">
                            <div>
                                <h3 className="course--detail--title">Course</h3>
                                <h4 className="course--name">Course Name</h4>
                                <p>By Author</p>

                                <p>Description</p>
                            </div>
                            <div>
                                <h3 className="course--detail--title">Estimated Time</h3>
                                <p>Time</p>

                                <h3 className="course--detail--title">Material Needed</h3>
                                <ul className="course--detail--list">
                                    <li>Item</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}