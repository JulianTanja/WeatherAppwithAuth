import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/authcontext';
import '../signin.css';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await signIn(email, password);
          navigate('/Geolocation');
        } catch (e) {
          setError(e.message);
          console.log(e.message);
        }
    };

    return(
        <div className='signindiv'>
            <h1>Welcome to Weather Web!</h1>
            <br /> 
            <br />
            <div>
                <h2>Sign in to your account</h2>
                <br />
                <p>
                    Don't have an account yet? <Link to='/SignUp'>Sign Up</Link>
                </p>
            </div>
            <form onSubmit={handleSubmit2}>
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
                <button className='but'>Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;