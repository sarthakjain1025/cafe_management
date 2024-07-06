import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded' style={{ width: '300px' }}>
        <h2>Forgot Password</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id="email" placeholder='Enter Your Email' className='form-control rounded-0' />
          </div>

          <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Send Password</strong></button>

          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none mt-2'>
            <strong>Close</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
