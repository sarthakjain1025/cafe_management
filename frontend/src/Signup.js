import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25' >
        <h2>Sign-Up</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" id="name" placeholder='Enter Your Name' className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="number"><strong>Contact Number</strong></label>
            <input type="text" id="number" placeholder='Enter Your Contact Number' className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id="email" placeholder='Enter Your Email' className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id="password" placeholder='Enter Your Password' className='form-control rounded-0' />
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none mt-2'>
            <strong>Login</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
