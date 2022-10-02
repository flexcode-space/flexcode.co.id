import React from 'react';
import { Link } from 'react-router-dom';

const FeatureFive = () => {
  return (
    <>
      <section className='app-two-feature ptb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='section-heading text-center'>
                <h2>Explore Premium Features</h2>
                <p>
                  A bit of how's your father he nicked it charles daft plast
                  lavator.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-xl-10'>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12'>
                  <div className='app-two-single-feature d-md-flex align-items-start mb-30'>
                    <div className='app-two-single-feature-icon box-one me-3 mb-4 mb-md-0'>
                      <i className='far fa-file-edit'></i>
                    </div>
                    <div className='app-two-single-feature-content'>
                      <h3 className='h5'>Easy to Customized</h3>
                      <p>
                        Authoritatively productize orthogonal networks rather
                        than state of the art interfaces.
                      </p>
                      <Link
                        to='/single-service'
                        className='link-with-icon text-decoration-none'
                      >
                        View Details <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12'>
                  <div className='app-two-single-feature d-md-flex align-items-start mb-30'>
                    <div className='app-two-single-feature-icon box-two me-3 mb-4 mb-md-0'>
                      <i className='far fa-bell'></i>
                    </div>
                    <div className='app-two-single-feature-content'>
                      <h3 className='h5'>Mobile App</h3>
                      <p>
                        Enthusiastically envisioneer integrated catalysts for
                        change before fully researched vortals.
                      </p>
                      <Link
                        to='/single-service'
                        className='link-with-icon text-decoration-none'
                      >
                        View Details <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12'>
                  <div className='app-two-single-feature d-md-flex align-items-start mb-30'>
                    <div className='app-two-single-feature-icon box-three me-3 mb-4 mb-md-0'>
                      <i className='far fa-pen-nib'></i>
                    </div>
                    <div className='app-two-single-feature-content'>
                      <h3 className='h5'>Expand your reach</h3>
                      <p>
                        Authoritatively syndicate focused ideas whereas
                        revolutionary outsourcing.
                      </p>
                      <Link
                        to='/single-service'
                        className='link-with-icon text-decoration-none'
                      >
                        View Details <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12'>
                  <div className='app-two-single-feature d-md-flex align-items-start mb-30'>
                    <div className='app-two-single-feature-icon box-four me-3 mb-4 mb-md-0'>
                      <i className='far fa-cloud-download-alt'></i>
                    </div>
                    <div className='app-two-single-feature-content'>
                      <h3 className='h5'>Free Download</h3>
                      <p>
                        Rapidiously reintermediate plug-and-play potentialities
                        via cross-unit e-markets.
                      </p>
                      <Link
                        to='/single-service'
                        className='link-with-icon text-decoration-none'
                      >
                        View Details <i className='far fa-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFive;
