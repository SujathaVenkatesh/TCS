import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="container">
      <div className='form_container'>
        <div className='logo_container' />
        <div className='title_container'>
          <p className='title'>Login to your account</p>
          <span className='subtitle'>Get started with your app, just create an account and enjoy the experience</span>
        </div>
        <br />
        <div className='input_container'>
          <label className='input_label' htmlFor='email_field'>Email</label>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M0 0h24v24H0z' fill='none' />
            {/* Add the correct paths for the SVG */}
          </svg>
          <input placeholder='name@gmail.com' title='name_title' name='input-name' type='text' className='input_field' id='email_field' />
        </div>
        <div className='input_container'>
          <label className='input_label' htmlFor='password_field'>Password</label>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M0 0h24v24H0z' fill='none' />
            {/* Add the correct paths for the SVG */}
          </svg>
          <input placeholder='Password' title='password_title' name='input-password' type='password' className='input_field' id='password_field' />
        </div>
        <button title='sign_up' type='submit' className='sign_in_btn'><span>Sign In</span></button>
        <div className='seperator'>
          <hr className='line' /><span>or</span><hr className='line' />
        </div>
        <button title='sign_in_google' type='submit' className='sign_in_ggl'><span>Sign In with Google</span></button>
        <button title='sign_in' type='submit' className='sign_in_ggl'>
          <svg height='20px' width='16px' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='https://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid' viewBox='0 0 256 315'>
            <path fill='#ffffff' d='M0 0h256v315H0z' />
            {/* Add the correct path for the SVG */}
          </svg>
          <span>Sign in with Apple</span>
        </button>
        <p className='note'>Terms of Use &amp; Conditions</p>
      </div>
    </div>
  );
}

export default Signup;
