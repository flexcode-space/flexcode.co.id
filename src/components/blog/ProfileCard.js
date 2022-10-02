import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  return (
    <>
      <div className='author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0'>
        <img
          src='assets/img/team/team-2.jpg'
          alt='author'
          width='120'
          className='img-fluid shadow-sm rounded-circle'
        />
        <div className='author-info my-4'>
          <h5 className='mb-0'>Elena Mou</h5>
          <span className='small'>Head of Designer</span>
        </div>
        <p>
          Uniquely communicate open-source technology after value-added ideas.
          Professionally engage efficient channels without B2C functionalities.
        </p>
        <ul className='list-unstyled author-social-list list-inline mt-3 mb-0'>
          <li className='list-inline-item'>
            <Link to='#'>
              <i className='fab fa-linkedin-in'></i>
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to='#'>
              <i className='fab fa-twitter'></i>
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to='#'>
              <i className='fab fa-github'></i>
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to='#'>
              <i className='fab fa-facebook-f'></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileCard;
