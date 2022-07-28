// We work for both login and signup here
import React from 'react';
import { handleGoogleSignIn, initializeLoginFramework } from './loginManager';

const Login = ({ setLoggedInEmail }) => {
  initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleResponse = (res, redirect) => {
    // we should use token, As I have only 2 hours so I am using session Storage
    sessionStorage.setItem('email', res.email);
    console.log(res.email);
    setLoggedInEmail(res.email);
  };

  return (
    <div className="text-center mt-5">
      <button onClick={googleSignIn} className="btn btn-primary ">
        Sign In With Email
      </button>
    </div>
  );
};

export default Login;
