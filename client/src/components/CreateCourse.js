import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';


export default function CreateCourse({ context }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [materialsNeeded, setMaterialsNeeded] = useState("");
    const [userId, setUserId] = useState(0);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const submit = () => {

        const course = {
            title, 
            description,
            estimatedTime,
            materialsNeeded
        };

        context.data.createCourse(course)
            .then((response) => {
                console.log("Course has been created!")
                navigate('/');
            })
            .catch (error => {
                if (error.response.status === 401) {
                    navigate('/forbidden');
                } else {
                    navigate('/error');
                }
            });

    }

    const cancel = () => {
        navigate('/');
    }

        return (
            <React.Fragment>
                <div className="wrap">
                    <h2>Create Course</h2>
                    <Form
                        cancel={cancel}
                        errors={errors}
                        submit={submit}
                        submitButtonText="Create Course"
                        elements={() => (
                            <div className="main--flex">
                                <div>
                                    <label> Course Title
                                        <input 
                                            id="courseTitle"
                                            name="courseTitle"
                                            type="text"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            placeholder="Course Title"
                                        />
                                    </label>
                                    <p>Author</p>
                                    <label> Course Description
                                        <textarea 
                                            id="courseDescription"
                                            name="courseDescription"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                            placeholder="Course Description"
                                        />
                                    </label> 
                                </div>
                                <div>
                                    <label>Estimated Time
                                        <input
                                            id="estimatedTime"
                                            name="estimatedTime"
                                            type="text"
                                            value={estimatedTime}
                                            onChange={e => setEstimatedTime(e.target.value)}
                                            placeholder="Estimated Time"
                                        />
                                    </label>
                                    <label>Materials Needed
                                        <textarea
                                            id="materialsNeeded"
                                            name="materialsNeeded"
                                            value={materialsNeeded}
                                            onChange={e => setMaterialsNeeded(e.target.value)}
                                            placeholder="Materials Needed"
                                        />
                                    </label>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </React.Fragment>
        )
}