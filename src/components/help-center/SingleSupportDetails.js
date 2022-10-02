import React from 'react';
import { Link } from 'react-router-dom';

const SingleSupportDetails = () => {
  return (
    <>
      <section className='support-content ptb-120'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-4 col-md-4 d-none d-md-block d-lg-block'>
              <div className='support-article-sidebar sticky-sidebar'>
                <Link to='/help-center' className='btn btn-primary mb-4 btn-sm'>
                  <i className='far fa-angle-left me-2'></i> Go Back
                </Link>
                <div className='nav flex-column nav-pills support-article-tab bg-light rounded-custom p-5'>
                  <h5>Related Support Articles</h5>
                  <Link
                    to='support-single.html'
                    className='text-muted text-decoration-none py-2 d-block'
                  >
                    Can retailers opt-out of participation at any time?
                  </Link>
                  <Link
                    to='support-single.html'
                    className='text-muted text-decoration-none py-2 d-block'
                  >
                    How long does enforcement take after a MAP violation attempt
                    is made?
                  </Link>
                  <Link
                    to='support-single.html'
                    className='text-muted text-decoration-none py-2 d-block'
                  >
                    After retailer acceptance, how long does it take for
                    enforcement to occur?
                  </Link>
                  <Link
                    to='support-single.html'
                    className='text-muted text-decoration-none py-2 d-block'
                  >
                    What is the monthly cost of your app?
                  </Link>
                  <Link
                    to='support-single.html'
                    className='text-muted text-decoration-none py-2 d-block'
                  >
                    Do you offer refunds for the subscriptions?
                  </Link>
                  <Link
                    to='/help-center-single'
                    className='text-muted text-decoration-none py-2 d-block'
                  >
                    Are notifications sent when MAP violation attempts occur?
                  </Link>
                </div>
                <div className='bg-light p-5 mt-4 rounded-custom quick-support'>
                  <Link
                    to='/contact-us'
                    className='text-decoration-none text-muted d-flex align-items-center py-2'
                  >
                    <div className='quick-support-icon rounded-circle bg-success-soft me-3'>
                      <i className='far fa-ballot-check text-success'></i>
                    </div>
                    <div className='contact-option-text'>
                      Quick Support Form
                    </div>
                  </Link>
                  <Link
                    to='/mailto:info@themetags.com'
                    className='text-decoration-none text-muted d-flex align-items-center py-2'
                  >
                    <div className='quick-support-icon rounded-circle bg-primary-soft me-3'>
                      <i className='far fa-envelope text-primary'></i>
                    </div>
                    <div className='contact-option-text'>
                      info@themetags.com
                    </div>
                  </Link>
                  <Link
                    to='#'
                    target='_blank'
                    className='text-decoration-none text-muted d-flex align-items-center py-2'
                  >
                    <div className='quick-support-icon rounded-circle bg-danger-soft me-3'>
                      <i className='far fa-comment-alt-lines text-danger'></i>
                    </div>
                    <div className='contact-option-text'>Live Support Chat</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-8 col-md-8 p-lg-5'>
              <div className='support-article-wrap'>
                <h1 className='display-5 mb-4 fw-bold'>
                  Can retailers opt-out of participation at any time?
                </h1>
                <p>
                  Dramatically plagiarize client-based relationships and
                  interactive supply chains. Interactively enable leading-edge
                  outsourcing without interoperable sources. Compellingly
                  fabricate multifunctional mindshare with prospective
                  e-business. Phosfluorescently impact process-centric value via
                  principle-centered deliverables. Dramatically visualize
                  diverse services whereas future-proof networks.
                </p>
                <p>
                  Dynamically disseminate progressive deliverables with
                  long-term high-impact niche markets. Interactively parallel
                  task unique communities for future-proof results. Holisticly
                  innovate strategic deliverables through innovative leadership.{' '}
                </p>

                <div className='job-details-info my-5'>
                  <h3 className='h5'>
                    Follow this Step Bellow Responsibilities
                  </h3>
                  <ul className='content-list list-unstyled'>
                    <li>
                      Be involved in every step of the product design cycle from
                      discovery and user acceptance testing.
                    </li>
                    <li>
                      Work with BAs, product managers and tech teams to lead the
                      Product Design
                    </li>
                    <li>
                      Maintain quality of the design process and ensure that
                      when designs are translated into code they accurately.
                    </li>
                    <li>
                      Accurately estimate design tickets during planning
                      sessions.
                    </li>
                    <li>
                      Contribute to sketching sessions involving
                      non-designersCreate, and pattern libraries.
                    </li>
                    <li>
                      Design pixel perfect responsive UI’s and understand that
                      adopting common interface
                    </li>
                    <li>
                      Interface patterns is better for UX than reinventing the
                      wheel
                    </li>
                  </ul>
                </div>
                <p>
                  Enthusiastically expedite client-focused communities for
                  process-centric collaboration and idea-sharing. Globally
                  evolve high-quality methods of empowerment via plug-and-play
                  resources. Compellingly transition worldwide strategic theme
                  areas vis-a-vis frictionless systems.{' '}
                </p>
                <p>
                  Uniquely develop empowered expertise without parallel portals.
                  Efficiently reintermediate plug-and-play imperatives without
                  goal-oriented technologies. Rapidiously network frictionless
                  scenarios rather than multidisciplinary innovation.
                  Efficiently restore interactive resources before
                  enterprise-wide functionalities. Phosfluorescently benchmark
                  an expanded array of data for premier interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleSupportDetails;
