import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const PriceOne = ({ paddingTop,haspriceTitleWithHeader }) => {
  return (
    <>
      <section
        className={`pricing-section ${paddingTop} position-relative z-2`}
      >
        <div className='container'>
          {haspriceTitleWithHeader ? (
            <div>
              <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-10'>
                  <SectionTitle
                    subtitle='Pricing'
                    variant='text-primary'
                    title='Check Our Valuable Price'
                    description='Conveniently mesh cooperative services via magnetic
                  outsourcing. Dynamically grow value whereas accurate
                  e-commerce vectors.'
                    centerAlign
                  />
                </div>
              </div>
              <div className='row justify-content-center mb-5'>
                <div className='col-lg-3'>
                  <div className='media d-flex align-items-center py-2 p-sm-2'>
                    <div
                      className='
                    icon-box
                    mb-0
                    bg-primary-soft
                    rounded-circle
                    d-block
                    me-3
                  '
                    >
                      <i className='fal fa-credit-card text-primary'></i>
                    </div>
                    <div className='media-body fw-medium h6 mb-0'>
                      No credit card required
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='media d-flex align-items-center py-2 p-sm-2'>
                    <div
                      className='
                    icon-box
                    mb-0
                    bg-success-soft
                    rounded-circle
                    d-block
                    me-3
                  '
                    >
                      <i className='fal fa-calendar-check text-success'></i>
                    </div>
                    <div className='media-body fw-medium h6 mb-0'>
                      Get 30 day free trial
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='media d-flex align-items-center py-2 p-sm-2'>
                    <div
                      className='
                    icon-box
                    mb-0
                    bg-danger-soft
                    rounded-circle
                    d-block
                    me-3
                  '
                    >
                      <i className='fal fa-calendar-times text-danger'></i>
                    </div>
                    <div className='media-body fw-medium h6 mb-0'>
                      Cancel anytime
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='
                  position-relative
                  single-pricing-wrap
                  rounded-custom
                  bg-white
                  custom-shadow
                  p-5
                  mb-4 mb-lg-0
                '
              >
                <div className='pricing-header mb-32'>
                  <h3 className='package-name text-primary d-block'>Stater</h3>
                  <h4 className='display-6 fw-semi-bold'>
                    $25<span>/month</span>
                  </h4>
                </div>
                <div className='pricing-info mb-4'>
                  <ul className='pricing-feature-list list-unstyled'>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>{' '}
                      1 Team
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>{' '}
                      1 Installed Agent
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Real-Time Feedback
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Video Dedicated Support
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>{' '}
                      1 Attacked Targets Per Month
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Team Collaboration Tools
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Automated Updated Features
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      24/7 Life time Support
                    </li>
                  </ul>
                </div>
                <Link
                  to='/request-for-demo'
                  className='btn btn-outline-primary mt-2'
                >
                  Buy Now
                </Link>

                {/* <!--pattern start--> */}
                <div
                  className='
                    dot-shape-bg
                    position-absolute
                    z--1
                    left--40
                    bottom--40
                  '
                >
                  <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='
                  position-relative
                  single-pricing-wrap
                  rounded-custom
                  bg-gradient
                  text-white
                  p-5
                  mb-4 mb-lg-0
                '
              >
                <div className='pricing-header mb-32'>
                  <h3 className='package-name text-warning d-block'>
                    Advanced
                  </h3>
                  <h4 className='display-6 fw-semi-bold'>
                    $45<span>/month</span>
                  </h4>
                </div>
                <div className='pricing-info mb-4'>
                  <ul className='pricing-feature-list list-unstyled'>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>{' '}
                      5 Team
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>{' '}
                      3 Installed Agent
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>
                      Real-Time Feedback
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>
                      Video Dedicated Support
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>{' '}
                      24 Attacked Targets Per Month
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>
                      Team Collaboration Tools
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>
                      Automated Updated Features
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-warning me-2'></i>
                      24/7 Life time Support
                    </li>
                  </ul>
                </div>
                <Link to='/request-for-demo' className='btn btn-primary mt-2'>
                  Buy Now
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='
                  position-relative
                  single-pricing-wrap
                  rounded-custom
                  bg-white
                  custom-shadow
                  p-5
                  mb-4 mb-lg-0
                '
              >
                <div className='pricing-header mb-32'>
                  <h3 className='package-name text-primary d-block'>Premium</h3>
                  <h4 className='display-6 fw-semi-bold'>
                    $75<span>/month</span>
                  </h4>
                </div>
                <div className='pricing-info mb-4'>
                  <ul className='pricing-feature-list list-unstyled'>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>{' '}
                      6 Team
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>{' '}
                      8 Installed Agent
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Real-Time Feedback
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Video Dedicated Support
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>{' '}
                      40 Attacked Targets Per Month
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Team Collaboration Tools
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      Automated Updated Features
                    </li>
                    <li>
                      <i className='fas fa-circle fa-2xs text-primary me-2'></i>
                      24/7 Life time Support
                    </li>
                  </ul>
                </div>
                <Link
                  to='/request-for-demo'
                  className='btn btn-outline-primary mt-2'
                >
                  Buy Now
                </Link>

                {/* <!--pattern start--> */}
                <div className='dot-shape-bg position-absolute z--1 right--40 top--40'>
                  <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceOne;
