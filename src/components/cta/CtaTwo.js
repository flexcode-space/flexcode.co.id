import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import SectionTitle from '../common/SectionTitle';

const CtaTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className='cta-subscribe bg-dark ptb-120 position-relative overflow-hidden'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='subscribe-info-wrap text-center position-relative z-2'>
                <SectionTitle
                  subtitle="Let's Try! Get Free Support"
                  title='Start Your 14-Day Free Trial'
                  description='We can help you to create your dream website for better
                    business revenue.'
                  dark
                />
                <div className='form-block-banner mw-60 m-auto mt-5'>
                  <Link to='/contact-us' className='btn btn-primary'>
                    Contact with Us
                  </Link>
                  <ModalVideo
                    channel='youtube'
                    autoplay
                    isOpen={isOpen}
                    videoId='hAP2QF--2Dg'
                    onClose={() => setOpen(false)}
                  />
                  <Link
                    to='#'
                    className='text-decoration-none d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0'
                    onClick={() => setOpen(true)}
                  >
                    <i className='fas fa-play'></i> Watch Demo{' '}
                  </Link>
                </div>
                <ul
                  className='nav justify-content-center subscribe-feature-list mt-4'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <li className='nav-item'>
                    <span>
                      <i className='far fa-check-circle text-primary me-2'></i>
                      Free 14-day trial
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='far fa-check-circle text-primary me-2'></i>
                      No credit card required
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='far fa-check-circle text-primary me-2'></i>
                      Support 24/7
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span>
                      <i className='far fa-check-circle text-primary me-2'></i>
                      Cancel anytime
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className='
              bg-circle
              rounded-circle
              circle-shape-3
              position-absolute
              bg-dark-light
              left-5
            '
          ></div>
          <div
            className='
              bg-circle
              rounded-circle
              circle-shape-1
              position-absolute
              bg-warning
              right-5
            '
          ></div>
        </div>
      </section>
    </>
  );
};

export default CtaTwo;
