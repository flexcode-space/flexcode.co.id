import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureImgContentTwo = () => {
  return (
    <>
      <section className='feature-section pt-60 pb-120'>
        <div className='container'>
          <div className='row align-content-center justify-content-between'>
            <div className='col-lg-5 col-md-12'>
              <div className='icon-box rounded-custom bg-danger shadow-sm d-inline-block'>
                <i className='fal fa-shield-check fa-2x text-white'></i>
              </div>
              <SectionTitle
                title='Increasing Business Success With Technology'
                description='  Uniquely benchmark multifunctional catalysts for change via
                  manufactured products brand scalable products. Network
                  orthogonal infomediaries through pandemic initiatives.'
              />
              <div className='single-feature d-flex mb-4'>
                <span className='fad fa-bezier-curve fa-2x text-primary'></span>
                <div className='ms-4 mt-2'>
                  <h5>Pixel Perfect Design</h5>
                  <p>
                    Credibly syndicate enterprise total linkage whereas cost
                    effective of the art data without multifunctional.{' '}
                  </p>
                </div>
              </div>
              <div className='single-feature d-flex mb-4'>
                <span className='fad fa-code fa-2x text-primary'></span>
                <div className='ms-4 mt-2'>
                  <h5>Development Execution</h5>
                  <p>
                    Synergistically communicate excellent rather than
                    enterprise-wide value quickly architect emerging interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-8'>
              <div className='feature-shape-img position-relative mt-5 mt-lg-0'>
                <div className='img-bg-shape position-absolute'>
                  <img
                    src='assets/img/integations/shape.svg'
                    alt='integations'
                  />
                </div>
                <img
                  src='assets/img/dashkit.png'
                  className='img-fluid skewed-img-right rounded-custom shadow-lg'
                  alt='softtent'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentTwo;
