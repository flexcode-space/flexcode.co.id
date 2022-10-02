import React from 'react';
import { Link } from 'react-router-dom';
import BlogPagination from './BlogPagination';

const BlogGrid = () => {
  return (
    <>
      <section className='masonary-blog-section ptb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='single-article feature-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-10.jpg'
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
                      Marketing
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      Why product managers must be strategic about chasing new
                      trends
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
                        <h6 className='mb-0 avatar-name'>Donna Martin</h6>
                        <span className='small fw-medium text-muted'>
                          April 24, 2022
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='single-article feature-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-11.jpg'
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
                      Two tried-and-true frameworks for achieving product/market
                      fit
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
                          src='assets/img/testimonial/4.jpg'
                          alt='avatar'
                          width='40'
                          className='img-fluid rounded-circle me-3'
                        />
                      </div>
                      <div className='avatar-info'>
                        <h6 className='mb-0 avatar-name'>Donna Martin</h6>
                        <span className='small fw-medium text-muted'>
                          April 24, 2022
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom my-3'>
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
                  <Link to='/blog-single'>
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
              <div className='single-article rounded-custom my-3'>
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
              <div className='single-article rounded-custom my-3'>
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
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-4.jpg'
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
                      Marketing
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      The role of product ops in successful distributed teams
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
                          src='assets/img/testimonial/4.jpg'
                          alt='avatar'
                          width='40'
                          className='img-fluid rounded-circle me-3'
                        />
                      </div>
                      <div className='avatar-info'>
                        <h6 className='mb-0 avatar-name'>Raymond H. Martin</h6>
                        <span className='small fw-medium text-muted'>
                          May 4, 2021
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-5.jpg'
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
                      UI/UX
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      The modern product manager’s tech stack
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
                          src='assets/img/testimonial/5.jpg'
                          alt='avatar'
                          width='40'
                          className='img-fluid rounded-circle me-3'
                        />
                      </div>
                      <div className='avatar-info'>
                        <h6 className='mb-0 avatar-name'>Luthar Martin</h6>
                        <span className='small fw-medium text-muted'>
                          Jan 24, 2021
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-6.jpg'
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
                      Management
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      30 product management thought leaders to follow
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
                        <h6 className='mb-0 avatar-name'>Donna Martin</h6>
                        <span className='small fw-medium text-muted'>
                          April 24, 2022
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-7.jpg'
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
                      Design
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      New analyst report: Digital product management tools and
                      tech
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
                        <h6 className='mb-0 avatar-name'>Donna R. Book</h6>
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
              <div className='single-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-8.jpg'
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
                      Development
                    </Link>
                  </div>
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      A frank discussion about diversity, inclusion, and
                      allyship
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
                        <h6 className='mb-0 avatar-name'>Donna R. Martin</h6>
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
              <div className='single-article rounded-custom my-3'>
                <Link to='/blog-single' className='article-img'>
                  <img
                    src='assets/img/blog/blog-9.jpg'
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
                  <Link to='/blog-single'>
                    <h2 className='h5 article-title limit-2-line-text'>
                      4 steps for measuring the impact of product discovery
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
                          src='assets/img/testimonial/2.jpg'
                          alt='avatar'
                          width='40'
                          className='img-fluid rounded-circle me-3'
                        />
                      </div>
                      <div className='avatar-info'>
                        <h6 className='mb-0 avatar-name'>Martin Luthar</h6>
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
          <BlogPagination />
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
