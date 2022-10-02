import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const LatestBlog = () => {
  return (
    <>
      <section className='related-blog-list ptb-120 bg-light'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-4 col-md-12'>
              <SectionTitle
                subtitle='Blog'
                title='Check our Latest News and Update'
              />
            </div>
            <div className='col-lg-7 col-md-12'>
              <div className='text-start text-lg-end mb-4 mb-lg-0 mb-xl-0'>
                <Link to='/blogs' className='btn btn-primary'>
                  View All Article
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom mb-4 mb-lg-0'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-1.jpg'
                    alt='article'
                    className='img-fluid'
                  />
                </Link>
                <div className='article-content p-4'>
                  <div className='article-category mb-4 d-block'>
                    <Link
                      to='#'
                      className='d-inline-block text-dark badge bg-warning-soft'
                    >
                      Design
                    </Link>
                  </div>
                  <Link to='blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      Do you really understand the concept of product value?
                    </h2>
                  </Link>
                  <p className='limit-2-line-text'>
                    Society is fragmenting into two parallel realities. In one
                    reality, you have infinite upside and opportunity. In the
                    other reality, you’ll continue to see the gap between your
                    standard of living and those at the top grow more and more.
                  </p>

                  <Link to='#'>
                    <div className='d-flex align-items-center pt-4'>
                      <div className='avatar'>
                        <img
                          src='assets/img/testimonial/6.jpg'
                          alt='avatar'
                          width='40'
                          className='img-fluid rounded-circle me-3'
                        />
                      </div>
                      <div className='avatar-info'>
                        <h6 className='mb-0 avatar-name'>Jane Martin</h6>
                        <span className='small fw-medium text-muted'>
                          April 24, 2021
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom mb-4 mb-lg-0'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-2.jpg'
                    alt='article'
                    className='img-fluid'
                  />
                </Link>
                <div className='article-content p-4'>
                  <div className='article-category mb-4 d-block'>
                    <Link
                      to='#'
                      className='d-inline-block text-dark badge bg-primary-soft'
                    >
                      Customer
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      Why communities help you build better products for your
                      business
                    </h2>
                  </Link>
                  <p className='limit-2-line-text'>
                    Society is fragmenting into two parallel realities. In one
                    reality, you have infinite upside and opportunity. In the
                    other reality, you’ll continue to see the gap between your
                    standard of living and those at the top grow more and more.
                  </p>

                  <Link to='#'>
                    <div className='d-flex align-items-center pt-4'>
                      <div className='avatar'>
                        <img
                          src='assets/img/testimonial/1.jpg'
                          alt='avatar'
                          width='40'
                          className='img-fluid rounded-circle me-3'
                        />
                      </div>
                      <div className='avatar-info'>
                        <h6 className='mb-0 avatar-name'>Veronica P. Byrd</h6>
                        <span className='small fw-medium text-muted'>
                          April 24, 2021
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom mb-4 mb-lg-0 mb-md-0'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-3.jpg'
                    alt='article'
                    className='img-fluid'
                  />
                </Link>
                <div className='article-content p-4'>
                  <div className='article-category mb-4 d-block'>
                    <Link
                      to='#'
                      className='d-inline-block text-dark badge bg-danger-soft'
                    >
                      Development
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      Why communities help you build better products
                    </h2>
                  </Link>
                  <p className='limit-2-line-text'>
                    Society is fragmenting into two parallel realities. In one
                    reality, you have infinite upside and opportunity. In the
                    other reality, you’ll continue to see the gap between your
                    standard of living and those at the top grow more and more.
                  </p>

                  <Link to='#'>
                    <div className='d-flex align-items-center pt-4'>
                      <div className='avatar'>
                        <img
                          src='assets/img/testimonial/3.jpg'
                          alt='avatar'
                          width='40'
                          className='img-fluid rounded-circle me-3'
                        />
                      </div>
                      <div className='avatar-info'>
                        <h6 className='mb-0 avatar-name'>Martin Gilbert</h6>
                        <span className='small fw-medium text-muted'>
                          April 24, 2021
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBlog;
