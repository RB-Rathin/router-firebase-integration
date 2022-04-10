import React from 'react';
import './Register.css';
const Register = () => {
    return (
        <div>
            <h2>please register now</h2>
            <form >
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your Password' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;