import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenterDetail = () => {
  return (
    <>
      <section className='support-content ptb-120'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-4 col-md-4 d-none d-md-block d-lg-block'>
              <div className='support-article-sidebar sticky-sidebar'>
                <div
                  className='nav flex-column nav-pills support-article-tab bg-light rounded-custom p-5'
                  id='v-pills-support'
                  role='tablist'
                  aria-orientation='vertical'
                >
                  <button
                    className='nav-link active'
                    data-bs-target='#support-tab-1'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='true'
                  >
                    All Documentation
                  </button>
                  <button
                    className='nav-link'
                    data-bs-target='#support-tab-2'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Payments Query
                  </button>
                  <button
                    className='nav-link'
                    data-bs-target='#support-tab-3'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Setup or Installment
                  </button>
                  <button
                    className='nav-link'
                    data-bs-target='#support-tab-4'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Technical Support
                  </button>
                  <button
                    className='nav-link'
                    data-bs-target='#support-tab-5'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Retailers & Customer
                  </button>
                  <button
                    className='nav-link'
                    data-bs-target='#support-tab-6'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Security Issues
                  </button>
                  <button
                    className='nav-link'
                    data-bs-target='#support-tab-7'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Brand Creation
                  </button>
                  <button
                    className='nav-link'
                    data-bs-target='#support-tab-8'
                    data-bs-toggle='pill'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Legal Support
                  </button>
                </div>
                <div className='bg-light p-5 mt-4 rounded-custom quick-support'>
                  <Link
                    to='contact-us.html'
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
                    to='mailto:info@themetags.com'
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
            <div className='col-lg-7 col-md-8'>
              <div className='tab-content' id='v-pills-supportContent'>
                <div
                  className='tab-pane fade show active'
                  id='support-tab-1'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>All Support Articles</h2>
                    <ul className='support-article-list list-unstyled mt-4'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='/help-center-single'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Rapidiously
                            incubate alternative infrastructures with high
                            standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            A lternative infrastructures with high standards in
                            e-markets. Intrinsicly evisculate e-business best
                            practices productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Mission-critical products before quality e-services.
                            Rapidiously incubate alternative infrastructures
                            with high standards e-business best practices
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            How often is there a subscribers stream?
                          </h3>
                          <p>
                            Critical products before quality e-services.
                            Incubate alternative infrastructures with high
                            standards in intrinsicly evisculate e-business best
                            alternative infrastructures practices...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What certifications does Agency has?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical ncubate
                            alternative infrastructures with high standards in
                            e-markets. e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='support-tab-2'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>Payments Query</h2>
                    <ul className='support-article-list list-unstyled'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical with high
                            standards in e-markets. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            e-business best practices productivate
                            standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets.
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='support-tab-3'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>Setup or Installment</h2>
                    <ul className='support-article-list list-unstyled'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical with high
                            standards in e-markets. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            e-business best practices productivate
                            standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets.
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='support-tab-4'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>Technical Support</h2>
                    <ul className='support-article-list list-unstyled'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical with high
                            standards in e-markets. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            e-business best practices productivate
                            standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets.
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='support-tab-5'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>Retailers & Customer</h2>
                    <ul className='support-article-list list-unstyled'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical with high
                            standards in e-markets. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            e-business best practices productivate
                            standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets.
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='support-tab-6'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>Security Issues</h2>
                    <ul className='support-article-list list-unstyled'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical with high
                            standards in e-markets. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            e-business best practices productivate
                            standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets.
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='support-tab-7'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>Brand Creation</h2>
                    <ul className='support-article-list list-unstyled'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical with high
                            standards in e-markets. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            e-business best practices productivate
                            standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets.
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='support-tab-8'
                  role='tabpanel'
                >
                  <div className='support-article-wrap'>
                    <h2>Legal Support</h2>
                    <ul className='support-article-list list-unstyled'>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you have any local branches?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What do I need to create an account?
                          </h3>
                          <p>
                            {' '}
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence. Credibly
                            evisculate mission-critical ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Do you offer refunds for the subscriptions?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical with high
                            standards in e-markets. Intrinsicly evisculate
                            e-business best practices productivate standardized
                            convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Intrinsicly evisculate
                            e-business best practices ...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            Are you open for new podcast guests?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            When is the upcoming annual event?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            e-business best practices productivate
                            standardized...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What is the monthly cost of your app?
                          </h3>
                          <p>
                            Rapidiously incubate alternative infrastructures
                            with high standards in e-markets. Intrinsicly
                            evisculate e-business best practices productivate
                            standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                      <li className='py-4 border-top border-light'>
                        <Link
                          to='support-single.html'
                          className='text-decoration-none d-block text-muted'
                        >
                          <h3 className='h5 support-article-title'>
                            What’s inside the Facebook community?
                          </h3>
                          <p>
                            Credibly evisculate mission-critical products before
                            quality e-services. Rapidiously incubate alternative
                            infrastructures with high standards in e-markets.
                            Intrinsicly evisculate e-business best practices
                            productivate standardized convergence...
                          </p>
                          <span className='btn-link text-decoration-none read-more-link'>
                            Read More{' '}
                            <i className='far fa-arrow-right ms-2'></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
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

export default HelpCenterDetail;
