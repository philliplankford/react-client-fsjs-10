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
            .then(errors => {
                if (errors.length) {
                    setErrors({ errors });
                } else {
                    console.log("Course has been created!")
                    navigate('/');
                }
            })
            .catch(errors => console.log(errors));

    }

    const cancel = () => {
        navigate('/');
    }

        return (
            <React.Fragment>
                <div className="wrap">
                    <h2>Create Course</h2>
                    <div className="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>Error</li>
                        </ul>
                    </div>

                    <Form
                        cancel={cancel}
                        errors={errors}
                        submit={submit}
                        submitButtonText="Create Course"
                        elements={() => (
                            <div className="main--flex">
                                <div>
                                    <input 
                                        id="courseTitle"
                                        name="courseTitle"
                                        type="text"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        placeholder="Course Title"
                                    />
                                    <p>By Author</p>
                                    <textarea 
                                        id="courseDescription"
                                        name="courseDescription"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        placeholder="Course Description"
                                    />
                                </div>
                                <div>
                                    <input
                                        id="estimatedTime"
                                        name="estimatedTime"
                                        type="text"
                                        value={estimatedTime}
                                        onChange={e => setEstimatedTime(e.target.value)}
                                        placeholder="Estimated Time"
                                    />
                                    <textarea
                                        id="materialsNeeded"
                                        name="materialsNeeded"
                                        value={materialsNeeded}
                                        onChange={e => setMaterialsNeeded(e.target.value)}
                                        placeholder="Materials Needed"
                                    />
                                </div>
                            </div>
                        )}
                    />
                </div>
            </React.Fragment>
        )
}