import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function CourseDetail({ context }) {
    const { id } = useParams();
    const [ course, setCourse ] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        context.data.api(`/courses/${id}`)
            .then(response => {
                setCourse(response.data);
            })
            .catch (error => {
                if (error.status === 404) {
                    navigate('/notfound');
                } else {
                    console.log(error);
                    navigate('/error');
                }
            })
    }, []);

    return (
        <React.Fragment>
            <div className="actions--bar">
                <div className="wrap">
                    {/* {
                        context.authenticatedUser.emailAddress === course.User.emailAddress 
                        ? 
                            <React.Fragment>
                                <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
                                <Link className="button" to={`/courses/${id}/delete`}>Delete Course</Link>
                            </React.Fragment> 
                        : null
                    } */}
                    <Link className="button button-secondary" to={`/`}>Return to List</Link>
                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            {/* <p>By: {course.User.firstName} {course.User.lastName}</p> */}
                            <ReactMarkdown>{course.description}</ReactMarkdown>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Material Needed</h3>
                            <ul className="course--detail--list">
                                <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default CourseDetail;