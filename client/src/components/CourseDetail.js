import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CourseDetail() {
    const { id } = useParams();

    const [ course, setCourse ] = useState(0);


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

export default CourseDetail;