import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded' style={{ width: '300px' }}>
        <h2>Login</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id="email" placeholder='Enter Your Email' className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id="password" placeholder='Enter Your Password' className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <Link to="/forgot_pass"><strong>Forgot Password?</strong></Link>
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none mt-2'>
            <strong>Sign up</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
