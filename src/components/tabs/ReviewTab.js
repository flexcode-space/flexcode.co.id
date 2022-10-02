import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../review/Rating';

const ReviewTab = () => {
  return (
    <>
      <div className='price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0'>
        <Link to='/' className='mb-5 d-none d-xl-block d-lg-block'>
          <img
            src='assets/img/logo-white.png'
            alt='logo'
            className='img-fluid'
          />
        </Link>
        <div className='customer-testimonial-wrap mt-60'>
          <div className='tab-content' id='nav-tabContent'>
            <div
              className='tab-pane fade show active'
              id='testimonial-tab-1'
              role='tabpanel'
            >
              <div className='testimonial-tab-content mb-4'>
                <div className='mb-2'>
                  <Rating />
                </div>
                <blockquote>
                  <h5>The Best Template You Got to Have it!</h5>
                  Globally network long-term high-impact schemas vis-a-vis
                  distinctive e-commerce cross-media infrastructures rather than
                  ethical sticky alignments rather than global.
                </blockquote>
                <div className='author-info mt-4'>
                  <h6 className='mb-0'>Joe Richard</h6>
                  <span>Visual Designer</span>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='testimonial-tab-2'
              role='tabpanel'
            >
              <div className='testimonial-tab-content mb-4'>
                <div className='mb-2'>
                  <ul className='review-rate mb-0 mt-2 list-unstyled list-inline'>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                  </ul>
                </div>
                <blockquote>
                  <h5>Amazing Quiety template!</h5>
                  Distinctively engineer client-centered information and
                  cooperative core competencies. Progressively customize
                  client-centered repurpose viral e-services whereas before 24/7
                  total linkage.
                </blockquote>
                <div className='author-info mt-4'>
                  <h6 className='mb-0'>Oberoi R.</h6>
                  <span className='small'>CEO at Herbs</span>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='testimonial-tab-3'
              role='tabpanel'
            >
              <div className='testimonial-tab-content mb-4'>
                <div className='mb-2'>
                  <ul className='review-rate mb-0 mt-2 list-unstyled list-inline'>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                    <li className='list-inline-item'>
                      <i className='fas fa-star text-warning'></i>
                    </li>
                  </ul>
                </div>
                <blockquote>
                  <h5>Embarrassed by the First Version!</h5>
                  Efficiently whiteboard cross-unit meta-services after
                  bleeding-edge deliverables. Quickly transition standardized
                  schemas via leveraged users. Assertively actualize
                  mission-critical supply chains through .
                </blockquote>
                <div className='author-info mt-4'>
                  <h6 className='mb-0'>Joan Dho</h6>
                  <span className='small'>Founder and CTO</span>
                </div>
              </div>
            </div>
          </div>
          <ul
            className='nav testimonial-tab-list mt-5'
            id='nav-tab'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className='active'
                href='#testimonial-tab-1'
                data-bs-toggle='tab'
                data-bs-target='#testimonial-tab-1'
                role='tab'
                aria-selected='true'
              >
                <img
                  src='assets/img/testimonial/1.jpg'
                  className='img-fluid rounded-circle'
                  width='60'
                  alt='user'
                />
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to='#testimonial-tab-2'
                data-bs-toggle='tab'
                data-bs-target='#testimonial-tab-2'
                role='tab'
                aria-selected='false'
              >
                <img
                  src='assets/img/testimonial/2.jpg'
                  className='img-fluid rounded-circle'
                  width='60'
                  alt='user'
                />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#testimonial-tab-3'
                data-bs-toggle='tab'
                data-bs-target='#testimonial-tab-3'
                role='tab'
                aria-selected='false'
              >
                <img
                  src='assets/img/testimonial/3.jpg'
                  className='img-fluid rounded-circle'
                  width='60'
                  alt='user'
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className='row justify-content-center mt-60'>
          <div className='col-12'>
            <p>Already trusted by some of the greatest companies</p>
            <ul className='list-unstyled list-inline mb-0'>
              <li className='list-inline-item'>
                <img
                  src='assets/img/clients/client-logo-1.svg'
                  width='120'
                  alt='clients logo'
                  className='img-fluid py-3 me-3 customer-logo'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='assets/img/clients/client-logo-2.svg'
                  width='120'
                  alt='clients logo'
                  className='img-fluid py-3 me-3 customer-logo'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='assets/img/clients/client-logo-3.svg'
                  width='120'
                  alt='clients logo'
                  className='img-fluid py-3 me-3 customer-logo'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='assets/img/clients/client-logo-4.svg'
                  width='120'
                  alt='clients logo'
                  className='img-fluid py-3 me-3 customer-logo'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='assets/img/clients/client-logo-5.svg'
                  width='120'
                  alt='clients logo'
                  className='img-fluid py-3 me-3 customer-logo'
                />
              </li>
              <li className='list-inline-item'>
                <img
                  src='assets/img/clients/client-logo-6.svg'
                  width='120'
                  alt='clients logo'
                  className='img-fluid py-3 me-3 customer-logo'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewTab;
