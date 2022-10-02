import React from 'react';

const FeatureImgContentThree = () => {
  return (
    <>
      <section className='feature-section pt-60 pb-120'>
        <div className='container'>
          <div className='row align-items-lg-center justify-content-between'>
            <div className='col-lg-5 order-lg-1 mb-7 mb-lg-0'>
              <div className='mb-4'>
                <h2>Advanced analytics easy to understand for sales</h2>
                <p>
                  Conveniently drive stand-alone total linkage for
                  process-centric content. Enthusiastically administrate robust
                  initiatives quickly unleash collaborative with client-focused.{' '}
                </p>
              </div>
              <ul className='list-unstyled d-flex flex-wrap list-two-col mt-5'>
                <li>
                  <span>
                    <i className='fal fa-comments-alt fa-2x text-primary mb-4'></i>
                  </span>
                  <h3 className='h5'>Live Chat with Agent</h3>
                  <p>Objectively exceptional via customized intellectual.</p>
                </li>
                <li>
                  <span>
                    <i className='fal fa-headset fa-2x text-primary mb-4'></i>
                  </span>
                  <h3 className='h5'>Quick Online Support</h3>
                  <p>
                    Interactively integrate extensible directed communities.{' '}
                  </p>
                </li>
              </ul>
            </div>
            <div className='col-lg-6 order-lg-2'>
              <div className='pr-lg-4 position-relative'>
                <div className='bg-light text-center rounded-custom overflow-hidden p-5 mx-lg-auto'>
                  <img
                    src='assets/img/dashboard-img-4.png'
                    alt=''
                    className='img-fluid rounded-custom shadow-sm'
                  />
                  <div className='position-absolute bg-secondary-dark z--1 dot-mask dm-size-16 dm-wh-350 bottom--40 right--40 bottom-right'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentThree;
