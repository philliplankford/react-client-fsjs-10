import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from './Form';

export default function UserSignIn({ context }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const submit = () => {
        context.actions.signIn(username, password)
            .then( user => {
                if (user === null) {
                    setErrors([`Sign-in was unsuccessful`]); //setErrors({ errors: [`Sign-in was unsuccessful`]});
                } else {
                    navigate(-1); // Equivilent to hitting the back button. Is that what we want?
                }
            })
            .catch ( err => {
                console.log(err);
                navigate('/error')
            })

    }

    const cancel = () => {
        navigate("/");
    }

    return (
        <React.Fragment>
            <div className="form--centered">
                <h2>Sign In</h2>
                <Form
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign In"
                    elements={() => (
                        <React.Fragment>
                            <input 
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="User Name"
                            />
                            <input 
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </React.Fragment>
                    )}
                />
                <p>Don't have a user account? Click <Link to="/signup">here to sign up</Link>!</p>
            </div>
        </React.Fragment>
    );
}