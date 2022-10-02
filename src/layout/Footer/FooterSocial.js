import React from 'react';
import { Link } from 'react-router-dom';

const FooterSocial = () => {
  return (
    <>
      <footer className='footer-section'>
        {/* <!--footer bottom start--> */}
        <div className='footer-bottom bg-dark text-white py-4'>
          <div className='container'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-md-7 col-lg-7'>
                <div className='copyright-text'>
                  <p className='mb-lg-0 mb-md-0'>
                    &copy; 2021 Quiety Rights Reserved. Designed By{' '}
                    <Link
                      to='https://themetags.com/'
                      className='text-decoration-none ms-2'
                    >
                      ThemeTags
                    </Link>
                  </p>
                </div>
              </div>
              <div className='col-md-4 col-lg-4'>
                <div className='footer-single-col text-start text-lg-end text-md-end'>
                  <ul className='list-unstyled list-inline footer-social-list mb-0'>
                    <li className='list-inline-item'>
                      <Link to='#'>
                        <i className='fab fa-facebook-f'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to='#'>
                        <i className='fab fa-instagram'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to='#'>
                        <i className='fab fa-dribbble'></i>
                      </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to='#'>
                        <i className='fab fa-github'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--footer bottom end--> */}
      </footer>
    </>
  );
};

export default FooterSocial;
