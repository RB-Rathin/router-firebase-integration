import React from 'react';
import useFirebase from '../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {signInWithGoogle}=useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <br />
            <form >
                
                <input type="email" placeholder='Your Password' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;