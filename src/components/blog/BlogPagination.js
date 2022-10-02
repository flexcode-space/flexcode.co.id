import React from 'react';
import { Link } from 'react-router-dom';

const BlogPagination = () => {
  return (
    <>
      {/* <!--pagination start--> */}
      <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-auto my-1'>
          <Link to='#' className='btn btn-primary btn-sm'>
            Previous
          </Link>
        </div>
        <div className='col-auto my-1'>
          <nav>
            <ul className='pagination rounded mb-0'>
              <li className='page-item'>
                <Link className='page-link' to='#'>
                  1
                </Link>
              </li>
              <li className='page-item active'>
                <Link className='page-link' to='#'>
                  2
                </Link>
              </li>
              <li className='page-item'>
                <Link className='page-link' to='#'>
                  3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='col-auto my-1'>
          <Link to='#' className='btn btn-primary btn-sm'>
            Next
          </Link>
        </div>
      </div>
      {/* <!--pagination end--> */}
    </>
  );
};

export default BlogPagination;
