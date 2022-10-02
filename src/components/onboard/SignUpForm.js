import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <>
      <div className='price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1'>
        <Link to='/' className='mb-5 d-block d-xl-none d-lg-none'>
          <img
            src='assets/img/logo-color.png'
            alt='logo'
            className='img-fluid'
          />
        </Link>
        <h1 className='h3'>Create an Account</h1>
        <p className='text-muted'>
          Get started with your free account today. No credit card needed and no
          setup fees.
        </p>

        <form action='#' className='mt-5 register-form'>
          <div className='row'>
            <div className='col-sm-6'>
              <label htmlFor='name' className='mb-1'>
                Name <span className='text-danger'>*</span>
              </label>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  id='name'
                  required
                  aria-label='name'
                />
              </div>
            </div>
            <div className='col-sm-6 '>
              <label htmlFor='email' className='mb-1'>
                Email <span className='text-danger'>*</span>
              </label>
              <div className='input-group mb-3'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  id='email'
                  required
                  aria-label='email'
                />
              </div>
            </div>
            <div className='col-sm-12'>
              <label htmlFor='company' className='mb-1'>
                Company
              </label>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Company'
                  id='company'
                  aria-label='company'
                />
              </div>
            </div>
            <div className='col-sm-12'>
              <label htmlFor='password' className='mb-1'>
                Password <span className='text-danger'>*</span>
              </label>
              <div className='input-group mb-3'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  id='password'
                  required
                  aria-label='Password'
                />
              </div>
            </div>
            <div className='col-12'>
              <div className='form-check d-flex'>
                <input
                  className='form-check-input me-2'
                  type='checkbox'
                  value=''
                  id='flexCheckChecked'
                />
                <label className='form-check-label' htmlFor='flexCheckChecked'>
                  I have read and agree to the{' '}
                  <Link to='#' className='text-decoration-none'>
                    Terms & Conditions
                  </Link>
                </label>
              </div>
            </div>
            <div className='col-12'>
              <button
                type='submit'
                className='btn btn-primary mt-4 d-block w-100'
              >
                Submit
              </button>
            </div>
          </div>
          <div className='position-relative d-flex align-items-center justify-content-center mt-4 py-4'>
            <span className='divider-bar'></span>
            <h6 className='position-absolute text-center divider-text bg-light mb-0'>
              Or
            </h6>
          </div>
          <div className='action-btns'>
            <Link
              to='#'
              className='btn google-btn mt-4 d-block bg-white shadow-sm d-flex align-items-center text-decoration-none justify-content-center'
            >
              <img
                src='assets/img/google-icon.svg'
                alt='google'
                className='me-3'
              />
              <span>Sign up with Google</span>
            </Link>
          </div>
          <p className='text-center text-muted mt-4 mb-0 fw-medium font-monospace'>
            Already have an account?{' '}
            <Link to='/login' className='text-decoration-none'>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
