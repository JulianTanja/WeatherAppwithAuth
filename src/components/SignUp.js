//import e from 'express';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/authcontext';

import '../signup.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navi = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await createUser(email, password);
            navi('/Geolocation')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    return(
        <div className='signupdiv'>
        <h2>Sign Up Here!</h2>
        <br /> 
        <br />
        <div>
                
                <p>
                    Already have an account? <Link to='/'>Sign In</Link>
                </p>
            </div>
        <form onSubmit={handleSubmit}>
            <div>
                <br />
                <label>Email Address: </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>
            <br />
            <div>
                <label>Password: </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <br />
            <button className='but_u'>Sign Up</button>
        </form>
    </div>
    );
}

export default SignUp;