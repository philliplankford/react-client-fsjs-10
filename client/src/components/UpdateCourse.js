import React, { Component } from 'react';

export default class UpdateCourse extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="wrap">
                    <h2>Update Course</h2>
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>Error</li>
                        </ul>
                    </div>
                    <form>
                        <div className="main--flex">
                            <div>
                                <label for="courseTitle">Course Title</label>
                                <input id="courseTitle" name="courseTitle" type="text" value=""></input>
                                <p>By Author</p>

                                <label for="courseDescription">Course Description</label>
                                <textarea id="courseDescription" name="courseDescription"></textarea>
                            </div>
                            <div>
                                <label for="estimatedTime">Estimated Time</label>
                                <input id="estimatedTime" name="estimatedTime" type="text" value=""></input>

                                <label for="materialsNeeded">Materials Needed</label>
                                <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                            </div>
                        </div>
                        <button className="button" type="submit">Update Course</button>
                        <button className="button button-secondary" onclick="event.preventDefault(); location.href='/';">Cancel</button>
                    </form>

                </div>
            </React.Fragment>
        )
    }
}