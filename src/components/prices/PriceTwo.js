import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../common/SectionTitle';

const PriceTwo = () => {
  return (
    <>
      <section
        className='pricing-section position-relative overflow-hidden bg-dark text-white pt-120'
        style={{
          background: "url('img/page-header-bg.svg')no-repeat center center",
        }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <SectionTitle
                subtitle='Plans &amp; Pricing'
                title='Check Our Valuable Price'
                description='Objectively market-driven intellectual capital rather than
                  covalent best practices facilitate strategic information
                  before innovation.'
                dark
                centerAlign
              />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='pricing-content-wrap mb--100 bg-white rounded-custom shadow-lg border d-fle z-10 position-relative'>
                <div className='price-feature-col pricing-feature-info left-radius bg-primary-soft p-5'>
                  <ul
                    className='list-unstyled pricing-feature-list pricing-included-list mb-0'
                    data-aos='fade-left'
                  >
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Unlimited domains
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Unlimited notifications
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      10,000 unique visitors
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Conversion analytics
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Conversion analytics
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Live chat support
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Recent activity notification
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Live visitor count notification
                    </li>
                    <li className='py-1'>
                      <i className='fas fa-check-circle text-primary me-2'></i>
                      Send data to analytics tools
                    </li>
                  </ul>
                </div>
                <div
                  className='price-feature-col pricing-action-info p-5'
                  data-aos='fade-right'
                >
                  <ul
                    className='nav nav-pills mb-4 pricing-tab-list'
                    id='pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item' role='presentation'>
                      <button
                        className='active'
                        id='pills-home-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-home'
                        type='button'
                        role='tab'
                        aria-controls='pills-home'
                        aria-selected='true'
                      >
                        Monthly
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        id='pills-profile-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-profile'
                        type='button'
                        role='tab'
                        aria-controls='pills-profile'
                        aria-selected='false'
                        className=''
                      >
                        Yearly
                      </button>
                    </li>
                  </ul>
                  <div className='tab-content' id='pills-tabContent'>
                    <div
                      className='tab-pane fade active show'
                      id='pills-home'
                      role='tabpanel'
                      aria-labelledby='pills-home-tab'
                    >
                      <h3 className='h5'>Pro Monthly</h3>
                      <p>
                        Professionally integrate principle-centered intellectual
                        capital whereas equity.
                      </p>
                      <div className='pricing-price mt-5'>
                        <h4 className='h1 fw-bold'>
                          $49 <span>/Month</span>
                        </h4>
                      </div>
                      <Link
                        to='/request-for-demo'
                        className='btn btn-primary mt-3'
                      >
                        Start 14-Days Trial
                      </Link>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-profile'
                      role='tabpanel'
                      aria-labelledby='pills-profile-tab'
                    >
                      <h3 className='h5'>Pro Yearly</h3>
                      <p>
                        Uniquely engineer prospective alignments without
                        clicks-and-mortar innovation.
                      </p>
                      <div className='pricing-price mt-5'>
                        <h4 className='h1 fw-bold'>
                          $89 <span>/Year</span>
                        </h4>
                      </div>
                      <Link
                        to='/request-for-demo'
                        className='btn btn-primary mt-3'
                      >
                        Start 14-Days Trial
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-circle rounded-circle circle-shape-1 position-absolute bg-warning left-5'></div>
        <div className='white-space-100 bg-white w-100'></div>
      </section>
    </>
  );
};

export default PriceTwo;
