import React from 'react';
import './Signup.css';
import loginlogo from '../images/loginlogo.jpg';
import { FaApple, FaGoogle} from 'react-icons/fa';

function Signup() {
  return (
    <div className='form_wrapper'>
      <form className='form_container'>
        <div className='title_container'>
        <div className='logo_container'>
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
            <path d='find the full path on my github' />
            <path d='find the full path on my github' />
          </svg>
          <input
            placeholder='name@gmail.com'
            title='name_title'
            name='input-name'
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
            <path d='find the full path on my github' />
            <path d='find the full path on my github' />
            <path fill='#141B34' d='find the full path on my github' />
          </svg>
          <input
            placeholder='Password'
            title='password_title'
            name='input-password'
            type='password'
            className='input_field'
            id='password_field'
          />
        </div>
        <button title='sign up' type='submit' className='sign-in_btn'>
          <span>Sign In</span>
        </button>
        <div className='seperator'>
          <hr className='line' />
          <span>or</span>
          <hr className='line' />
        </div>
        <button title='sign in' type='submit' className='sign-in_ggl'>
          <FaGoogle/>
          <span>Sign In with Google</span>
        </button>
      
       
        <button title='sign in' type='submit' className='sign-in_ggl'>
          <FaApple/>
          <span>Sign In with Apple</span>
        </button>
        <p className='note'>Terms of use &amp; Conditions</p>

      </form>
    </div>
  );
}

export default Signup;