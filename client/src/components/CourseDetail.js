import React, { Component } from 'react';

export default class CourseDetail extends Component {
    render () {

        return (
            // header
            <main>
                <div class="actions--bar">
                    <div class="wrap">
                        <a class="button" href="/">Update Course</a>
                        <a class="button" href="/">Delete Course</a>
                        <a class="button button-secondary" href="/">Return to List</a>
                    </div>
                </div>

                <div class="wrap">
                    <h2>Course Detail</h2>
                    <form>
                        <div class="main--flex">
                            <div>
                                <h3 class="course--detail--title">Course</h3>
                                <h4 class="course--name">Course Name</h4>
                                <p>By Author</p>

                                <p>Description</p>
                            </div>
                            <div>
                                <h3 class="course--detail--title">Estimated Time</h3>
                                <p>Time</p>

                                <h3 class="course--detail--title">Material Needed</h3>
                                <ul class="course--detail--list">
                                    <li>Item</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}