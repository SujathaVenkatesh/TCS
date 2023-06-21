import React, { useState } from 'react';
import './Signup.css';
import loginlogo from '../images/loginlogo.jpg';
import { FaApple, FaGoogle } from 'react-icons/fa';

function Signup() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent form submission (optional)

    // Simulating sign-in process
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Check if email and password are valid (example)
    if (email === 'example@gmail.com' && password === 'password') {
      setSignedIn(true); // Set signedIn state to true
    }
  };

  const handleContinue = () => {
    // Do something when continue button is clicked
    // You can add the desired logic here, such as navigating to another page
  };

  const handleGoogleSignIn = () => {
    // Simulating the sign-in process with Google
    window.location.href = 'https://accounts.google.com'; // Redirect to Google sign-in page
  };

  return (
    <div className='form_wrappers'>
      <form className='form_containersd' onSubmit={handleSignIn}>
        <div className='title_containerd'>
          <div className='logos_containerd'>
            <img src={loginlogo} className='logo' alt='' />
          </div>
          <p className='title'>Login to your account</p>
          <span className='subtitle'>
            Get started with your app, just create an account and enjoy the experience
          </span>
        </div>
        <div className='input_container'>
          <label className='input_label' htmlFor='email_field'>
            Email
          </label>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            {/* Rest of your code */}
          </svg>
          <input
            placeholder='name@gmail.com'
            title='name_title'
            name='email'
            type='text'
            className='input_field'
            id='email_field'
          />
        </div>
        <div className='input_container'>
          <label className='input_label' htmlFor='password_field'>
            Password
          </label>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            {/* Rest of your code */}
          </svg>
          <input
            placeholder='Password'
            title='password_title'
            name='password'
            type='password'
            className='input_field'
            id='password_field'
          />
        </div>
        <button title='sign up' type='submit' className='sign-in_btn'>
          <span>Sign In</span>
        </button>
        <div className='seperatored'>
          <span>or</span>
        </div>
        <button title='sign in' type='button' className='signs-in_ggls' onClick={handleGoogleSignIn}>
          <FaGoogle />
          <span>Sign In with Google</span>
        </button>
        <button title='sign in' type='submit' className='signs-in_ggl'>
          <FaApple />
          <span>Sign In with Apple</span>
        </button>
        <p className='note'>Terms of use &amp; Conditions</p>
      </form>
      {signedIn && (
        <div className='signed-in-container'>
          <p className='welcome-message'>Thank you and welcome to our team!</p>
          <button title='continue' type='button' className='continue-btn' onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default Signup;
