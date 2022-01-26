import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from './Form';

export default function UserSignUp({ context }) {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const submit = () => {
        
        const user = {
            firstName, 
            lastName,
            emailAddress,
            password,
        };

        context.data.createUser(user)
            .then( errors => {
                if (errors.length) {
                    setErrors({ errors });
                } else {
                    context.actions.signIn(emailAddress, password)
                        .then(() => {
                            navigate('/authenticated');
                        });
                        console.log(`${emailAddress} is successfully signed up and authenticated`);
                }
            })
            .catch (err => {
                console.log(err);
                navigate('/error');
            });
    }

    const cancel = () => {
        navigate('/');
    }

    return(
        <div className="form--centered">
            <h2>Sign Up</h2>

            <Form
                    cancel={cancel}
                    errors={errors}
                    submit={submit}
                    submitButtonText="Sign Up"
                    elements={() => (
                        <React.Fragment>
                            <input 
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={e => setFirstname(e.target.value)}
                                placeholder="First Name"
                            />
                             <input 
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={e => setLastname(e.target.value)}
                                placeholder="Last Name"
                            />
                            <input 
                                id="emailAddress"
                                name="emailAddress"
                                type="text"
                                value={emailAddress}
                                onChange={e => setEmailAddress(e.target.value)}
                                placeholder="Email Address"
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
            <p>Already have a user account? Click here to <a href="sign-in.html">sign in</a>!</p>
        </div>
    );
}