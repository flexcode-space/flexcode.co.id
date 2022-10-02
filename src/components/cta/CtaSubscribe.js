import React from 'react';

const CtaSubscribe = () => {
  return (
    <>
      <section className='cta-subscribe bg-dark ptb-120 position-relative overflow-hidden'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 col-md-8'>
              <div className='subscribe-info-wrap text-center position-relative z-2'>
                <div className='section-heading'>
                  <h4 className='h5 text-warning'>
                    Let's Try! Get Free Support
                  </h4>
                  <h2>Start Your 14-Day Free Trial</h2>
                  <p>
                    We can help you to create your dream website for better
                    business revenue.
                  </p>
                </div>
                <div className='form-block-banner mw-60 m-auto mt-5'>
                  <form
                    id='email-form2'
                    name='email-form'
                    className='subscribe-form d-flex'
                  >
                    <input
                      type='email'
                      className='form-control me-2'
                      name='Email'
                      data-name='Email'
                      placeholder='Your email'
                      id='Email2'
                      required=''
                    />
                    <input
                      type='submit'
                      value='Join!'
                      data-wait='Please wait...'
                      className='btn btn-primary'
                    />
                  </form>
                </div>
                <ul className='nav justify-content-center subscribe-feature-list mt-3'>
                  <li className='nav-item'>
                    <span>
                      <i className='fad fa-dot-circle text-primary me-2'></i>
                      Free 14-day trial
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='fad fa-dot-circle text-primary me-2'></i>No
                      credit card required
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='fad fa-dot-circle text-primary me-2'></i>
                      Support 24/7
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='fad fa-dot-circle text-primary me-2'></i>
                      Cancel anytime
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5'></div>
          <div className='bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5'></div>
        </div>
      </section>
    </>
  );
};

export default CtaSubscribe;
