import React, { Component} from 'react';
import { Link } from 'react-router-dom'

export default class Courses extends Component {

    constructor() {
        super();
        this.state = {
            allCourses: [],
        }
    }

    componentDidMount() {
        const { context } = this.props;
        context.data.api('/courses')
            .then( response => {
                console.log(response);
                this.setState({
                    allCourses: response.data,
                });
            })
        
    }

    render () {

        return (
            <React.Fragment>
                <div className="wrap main--grid">
                    { this.state.allCourses.map((course) => (
                        <Link 
                            key={`${course.id}`}
                            className="course--module course--link"
                            to={`/courses/${course.id}`}
                        >
                            <h2 className="course--label">Course</h2>
                            <h3 className="course--title">{course.title}</h3>   
                        </Link>
                    ))}
                    <Link 
                        className="course--module course--link"
                        to={`/courses`}
                    >
                        <h2 className="course--label">Course</h2>
                        <h3 className="course--title">Course Title</h3>   
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}