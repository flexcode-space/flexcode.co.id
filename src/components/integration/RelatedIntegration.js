import React from 'react';

const RelatedIntegration = () => {
  return (
    <>
      <section className='related-integration ptb-120 bg-light'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-5 col-md-12'>
              <div className='section-heading'>
                <h4 className='h5 text-primary'>Integration</h4>
                <h2>Integrate Third-party Custom App</h2>
              </div>
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='text-lg-end mb-4 mb-xl-0 mb-lg-0'>
                <a href='integrations.html' className='btn btn-primary'>
                  View All Integration
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <a
                href='integration-single.html'
                className='position-relative text-decoration-none connected-app-single bg-white border border-2 promo-border-hover bg-white mt-0 mt-xl-0 mt-lg-0 transition-base rounded-custom d-block overflow-hidden p-5'
              >
                <div className='position-relative connected-app-content'>
                  <div className='integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block'>
                    <img
                      src='assets/img/integations/1.png'
                      width='40'
                      alt='integration'
                      className='img-fluid'
                    />
                  </div>
                  <h5>Google Drive</h5>
                  <p className='mb-0 text-muted'>
                    Globally engage tactical niche markets rather than
                    client-based competently generate unique e-services
                  </p>
                </div>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a
                href='integration-single.html'
                className='position-relative text-decoration-none connected-app-single bg-white border border-2 promo-border-hover bg-white mt-4 mt-md-0 mt-xl-0 mt-lg-0 transition-base rounded-custom d-block overflow-hidden p-5'
              >
                <div className='position-relative connected-app-content'>
                  <div className='integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block'>
                    <img
                      src='assets/img/integations/2.png'
                      width='40'
                      alt='integration'
                      className='img-fluid'
                    />
                  </div>
                  <h5>Google Drive</h5>
                  <p className='mb-0 text-muted'>
                    Globally engage tactical niche markets rather than
                    client-based competently generate unique e-services
                  </p>
                </div>
                <span className='badge position-absolute integration-badge bg-primary-soft px-3 py-2 text-primary'>
                  New
                </span>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a
                href='integration-single.html'
                className='position-relative text-decoration-none connected-app-single bg-white border border-2 promo-border-hover bg-white mt-4 mt-xl-0 mt-lg-0 transition-base rounded-custom d-block overflow-hidden p-5'
              >
                <div className='position-relative connected-app-content'>
                  <div className='integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block'>
                    <img
                      src='assets/img/integations/3.png'
                      width='40'
                      alt='integration'
                      className='img-fluid'
                    />
                  </div>
                  <h5>Google Drive</h5>
                  <p className='mb-0 text-muted'>
                    Globally engage tactical niche markets rather than
                    client-based competently generate unique e-services
                  </p>
                </div>
                <span className='badge position-absolute integration-badge bg-danger-soft px-3 py-2 text-danger'>
                  Premium
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedIntegration;
