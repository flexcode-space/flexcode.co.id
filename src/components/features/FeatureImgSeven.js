import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureImgSeven = () => {
  return (
    <>
      <section className='why-choose-us pt-60 pb-120'>
        <div className='container'>
          <div className='row justify-content-lg-between justify-content-center align-items-center'>
            <div className='col-lg-5 col-md-7 order-1 order-lg-0'>
              <div className='why-choose-img position-relative'>
                <img
                  src='assets/img/feature-hero-img-2.svg'
                  className='img-fluid'
                  alt='duel-phone'
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 order-0 order-lg-1'>
              <div className='why-choose-content'>
                <div className='mb-32'>
                  <SectionTitle
                    title='We run all kinds of services in form of software'
                    description=' Conceptualize multimedia based ROI and wireless intellectual
                    capital. Dramatically seize visionary technologies whereas
                    interactive value.'
                    leftAlign
                  />
                </div>
                <ul className='list-unstyled d-flex flex-wrap list-two-col'>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Thought leadership
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Personal branding
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Modernized prospecting
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Better win rates
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Showcasing success
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Sales compliance
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Manage smartly
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Communicate fast
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgSeven;
