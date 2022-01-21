import React, { Component } from 'react';

export default class CreateCourse extends Component {
    render () {
        return (
            //header 
            <main>
                <div class="wrap">
                    <h2>Create Course</h2>
                    <div class="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>Error</li>
                        </ul>
                    </div>
                    <form>
                        <div class="main--flex">
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
                        <button class="button" type="submit">Create Course</button>
                        <button class="button button-secondary" onclick="event.preventDefault(); location.href='/';">Cancel</button>
                    </form>

                </div>
            </main>
        )
    }
}