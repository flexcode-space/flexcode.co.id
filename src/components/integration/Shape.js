import React from 'react';

const Shape = () => {
  return (
    <>
      <ul
        className='position-absolute animate-element parallax-element shape-service z--1'
        style={{
          transform: 'translate3d(0px, 0px, 0px)',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        <li
          className='layer'
          data-depth='0.02'
          style={{
            position: 'absolute',
            display: 'block',
            left: '0px',
            top: '0px',
            transform: 'translate3d(1.0875px, -2.45496px, 0px)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src='assets/img/color-shape/feature-2.svg'
            alt='shape'
            className='img-fluid position-absolute color-shape-2 z-5'
          />
        </li>
        <li
          className='layer'
          data-depth='0.03'
          style={{
            position: 'absolute',
            display: 'block',
            left: '0px',
            top: '0px',
            transform: 'translate3d(1.63125px, -3.68244px, 0px)',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src='assets/img/color-shape/feature-3.svg'
            alt='shape'
            className='img-fluid position-absolute color-shape-3'
          />
        </li>
      </ul>
    </>
  );
};

export default Shape;
