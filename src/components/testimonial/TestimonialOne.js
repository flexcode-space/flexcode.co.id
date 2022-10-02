import React, { Component } from 'react';
import SectionTitle from '../common/SectionTitle';
import TestimonialModal from './TestimonialModal';
import Rating from '../review/Rating';

class TestimonialOne extends Component {
  render() {
    const { darkBg } = this.props;
    return (
      <>
        <section
          className={`customer-review-tab ptb-120 ${
            darkBg ? 'bg-gradient text-white' : 'bg-light'
          } position-relative z-2`}
        >
          <div className='container'>
            <div className='row justify-content-center align-content-center'>
              <div className='col-md-10 col-lg-6'>
                {darkBg ? (
                  <SectionTitle
                    subtitle='Testimonial'
                    title='What They Say About Us'
                    description=' Uniquely promote adaptive quality vectors rather than
                  stand-alone e-markets. pontificate alternative architectures
                  whereas iterate.'
                    dark
                    centerAlign
                  />
                ) : (
                  <SectionTitle
                    subtitle='Testimonial'
                    title='What They Say About Us'
                    description=' Uniquely promote adaptive quality vectors rather than
                  stand-alone e-markets. pontificate alternative architectures
                  whereas iterate.'
                    centerAlign
                  />
                )}
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='tab-content' id='testimonial-tabContent'>
                  <div
                    className='tab-pane fade active show'
                    id='testimonial-tab-1'
                    role='tabpanel'
                  >
                    <div className='row align-items-center justify-content-between'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='testimonial-tab-content mb-5 mb-lg-0 mb-md-0'>
                          <img
                            src='assets/img/testimonial/quotes-left.svg'
                            alt='testimonial quote'
                            width='65'
                            className='img-fluid mb-32'
                          />
                          <div className='blockquote-title-review mb-4'>
                            <h3 className='mb-0 h4 fw-semi-bold'>
                              The Best Template You Got to Have it!
                            </h3>
                            <Rating />
                          </div>
                          <blockquote className='blockquote'>
                            <p>
                              Globally network long-term high-impact schemas
                              vis-a-vis distinctive e-commerce cross-media
                              infrastructures rather than ethical sticky
                              alignments rather than global. Plagiarize
                              technically sound total linkage for leveraged
                              value media web-readiness and premium processes.
                            </p>
                          </blockquote>
                          <div className='author-info mt-4'>
                            <h6 className='mb-0'>Joe Richard</h6>
                            <span>Visual Designer</span>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-5 col-md-6'>
                        <div className='author-img-wrap pt-5 ps-5'>
                          <div className='testimonial-video-wrapper position-relative'>
                            <img
                              src='assets/img/testimonial/t-1.jpg'
                              className='img-fluid rounded-custom shadow-lg'
                              alt='testimonial author'
                            />
                            <TestimonialModal />
                            <div className='position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='testimonial-tab-2'
                    role='tabpanel'
                  >
                    <div className='row align-items-center justify-content-between'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='testimonial-tab-content mb-5 mb-lg-0 mb-md-0'>
                          <img
                            src='assets/img/testimonial/quotes-left.svg'
                            alt='testimonial quote'
                            width='65'
                            className='img-fluid mb-32'
                          />
                          <div className='blockquote-title-review mb-4'>
                            <h3 className='mb-0 h4 fw-semi-bold'>
                              Embarrassed by the First Version.
                            </h3>
                            <Rating />
                          </div>
                          <blockquote className='blockquote'>
                            <p>
                              Energistically streamline robust architectures
                              whereas distributed mindshare. Intrinsicly
                              leverage other's backend growth strategies through
                              24/365 products. Conveniently pursue revolutionary
                              communities for compelling process improvements.{' '}
                            </p>
                          </blockquote>
                          <div className='author-info mt-4'>
                            <h6 className='mb-0'>Rupan Oberoi</h6>
                            <span>Web Designer</span>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-5 col-md-6'>
                        <div className='author-img-wrap pt-5 ps-5'>
                          <div className='testimonial-video-wrapper position-relative'>
                            <img
                              src='assets/img/testimonial/t-2.jpg'
                              className='img-fluid rounded-custom shadow-lg'
                              alt='testimonial author'
                            />
                            <TestimonialModal />
                            <div className='position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='testimonial-tab-3'
                    role='tabpanel'
                  >
                    <div className='row align-items-center justify-content-between'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='testimonial-tab-content mb-5 mb-lg-0 mb-md-0'>
                          <img
                            src='assets/img/testimonial/quotes-left.svg'
                            alt='testimonial quote'
                            width='65'
                            className='img-fluid mb-32'
                          />
                          <div className='blockquote-title-review mb-4'>
                            <h3 className='mb-0 h4 fw-semi-bold'>
                              Amazing Quiety template!
                            </h3>
                            <Rating />
                          </div>
                          <blockquote className='blockquote'>
                            <p>
                              Appropriately negotiate interactive niches rather
                              orchestrate scalable benefits whereas flexible
                              systems. Objectively grow quality outsourcing
                              without vertical methods of empowerment.
                              Assertively negotiate just in time innovation
                              after client-centered thinking.
                            </p>
                          </blockquote>
                          <div className='author-info mt-4'>
                            <h6 className='mb-0'>Jon Doe</h6>
                            <span>Software Engineer</span>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-5 col-md-6'>
                        <div className='author-img-wrap pt-5 ps-5'>
                          <div className='testimonial-video-wrapper position-relative'>
                            <img
                              src='assets/img/testimonial/t-3.jpg'
                              className='img-fluid rounded-custom shadow-lg'
                              alt='testimonial author'
                            />
                            <TestimonialModal />
                            <div className='position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='testimonial-tab-4'
                    role='tabpanel'
                  >
                    <div className='row align-items-center justify-content-between'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='testimonial-tab-content mb-5 mb-lg-0 mb-md-0'>
                          <img
                            src='assets/img/testimonial/quotes-left.svg'
                            alt='testimonial quote'
                            width='65'
                            className='img-fluid mb-32'
                          />
                          <div className='blockquote-title-review mb-4'>
                            <h3 className='mb-0 h4 fw-semi-bold'>
                              Best Template for SAAS Company!
                            </h3>
                            <Rating />
                          </div>
                          <blockquote className='blockquote'>
                            <p>
                              Competently repurpose cost effective strategic
                              theme areas and customer directed meta-services.
                              Objectively orchestrate orthogonal initiatives
                              after enterprise-wide bandwidth. Dynamically
                              generate extensive through cooperative channels
                              time partnerships.{' '}
                            </p>
                          </blockquote>
                          <div className='author-info mt-4'>
                            <h6 className='mb-0'>Hanry Luice</h6>
                            <span>App Developer</span>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-5 col-md-6'>
                        <div className='author-img-wrap pt-5 ps-5'>
                          <div className='testimonial-video-wrapper position-relative'>
                            <img
                              src='assets/img/testimonial/t-4.jpg'
                              className='img-fluid rounded-custom shadow-lg'
                              alt='testimonial author'
                            />
                            <TestimonialModal />
                            <div className='position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='testimonial-tab-5'
                    role='tabpanel'
                  >
                    <div className='row align-items-center justify-content-between'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='testimonial-tab-content mb-5 mb-lg-0 mb-md-0'>
                          <img
                            src='assets/img/testimonial/quotes-left.svg'
                            alt='testimonial quote'
                            width='65'
                            className='img-fluid mb-32'
                          />
                          <div className='blockquote-title-review mb-4'>
                            <h3 className='mb-0 h4 fw-semi-bold'>
                              It is Undeniably Good!
                            </h3>
                            <Rating />
                          </div>
                          <blockquote className='blockquote'>
                            <p>
                              Appropriately disintermediate one-to-one vortals
                              through cross functional infomediaries.
                              Collaboratively pursue multidisciplinary systems
                              through stand-alone architectures. Progressively
                              transition covalent architectures whereas vertical
                              applications procrastinate professional.
                            </p>
                          </blockquote>
                          <div className='author-info mt-4'>
                            <h6 className='mb-0'>Ami Nijai</h6>
                            <span>Customer Support</span>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-5 col-md-6'>
                        <div className='author-img-wrap pt-5 ps-5'>
                          <div className='testimonial-video-wrapper position-relative'>
                            <img
                              src='assets/img/testimonial/t-5.jpg'
                              className='img-fluid rounded-custom shadow-lg'
                              alt='testimonial author'
                            />
                            <TestimonialModal />
                            <div className='position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <ul
                  className='nav nav-pills testimonial-tab-menu mt-60'
                  id='testimonial'
                  role='tablist'
                >
                  <li className='nav-item' role='presentation'>
                    <div
                      className='nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link active'
                      data-bs-toggle='pill'
                      data-bs-target='#testimonial-tab-1'
                      role='tab'
                      aria-selected='false'
                    >
                      <div className='testimonial-thumb me-3'>
                        <img
                          src='assets/img/testimonial/1.jpg'
                          width='50'
                          className='rounded-circle '
                          alt='testimonial thumb'
                        />
                      </div>
                      <div className='author-info'>
                        <h6 className='mb-0'>Joe Richard</h6>
                        <span>Visual Designer</span>
                      </div>
                    </div>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <div
                      className='nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link'
                      data-bs-toggle='pill'
                      data-bs-target='#testimonial-tab-2'
                      role='tab'
                      aria-selected='false'
                    >
                      <div className='testimonial-thumb me-3'>
                        <img
                          src='assets/img/testimonial/2.jpg'
                          width='50'
                          className='rounded-circle'
                          alt='testimonial thumb'
                        />
                      </div>
                      <div className='author-info'>
                        <h6 className='mb-0'>Rupan Oberoi</h6>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <div
                      className='nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link'
                      data-bs-toggle='pill'
                      data-bs-target='#testimonial-tab-3'
                      role='tab'
                      aria-selected='false'
                    >
                      <div className='testimonial-thumb me-3'>
                        <img
                          src='assets/img/testimonial/3.jpg'
                          width='50'
                          className='rounded-circle'
                          alt='testimonial thumb'
                        />
                      </div>
                      <div className='author-info'>
                        <h6 className='mb-0'>Jon Doe</h6>
                        <span>Software Engineer</span>
                      </div>
                    </div>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <div
                      className='nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link'
                      data-bs-toggle='pill'
                      data-bs-target='#testimonial-tab-4'
                      role='tab'
                      aria-selected='false'
                    >
                      <div className='testimonial-thumb me-3'>
                        <img
                          src='assets/img/testimonial/4.jpg'
                          width='50'
                          className='rounded-circle'
                          alt='testimonial thumb'
                        />
                      </div>
                      <div className='author-info'>
                        <h6 className='mb-0'>Hanry Luice</h6>
                        <span>App Developer</span>
                      </div>
                    </div>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <div
                      className='nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link'
                      data-bs-toggle='pill'
                      data-bs-target='#testimonial-tab-5'
                      role='tab'
                      aria-selected='true'
                    >
                      <div className='testimonial-thumb me-3'>
                        <img
                          src='assets/img/testimonial/5.jpg'
                          width='50'
                          className='rounded-circle'
                          alt='testimonial thumb'
                        />
                      </div>
                      <div className='author-info'>
                        <h6 className='mb-0'>Ami Nijai</h6>
                        <span>Customer Support</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default TestimonialOne;
