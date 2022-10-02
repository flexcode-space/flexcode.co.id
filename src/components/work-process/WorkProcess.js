import React from 'react';
import SectionTitle from '../common/SectionTitle';

const WorkProcess = () => {
  return (
    <>
      <section className='work-process ptb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-10'>
              <SectionTitle
                subtitle='Process'
                title='We Follow Our Work Process'
                description='Enthusiastically engage cross-media leadership skills for
                  alternative experiences. Proactively drive vertical systems
                  than intuitive architectures.'
                centerAlign
              />
            </div>
          </div>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-5 col-md-12 order-1 order-lg-0'>
              <div className='img-wrap'>
                <img
                  src='assets/img/office-img-1.jpg'
                  alt='work process'
                  className='img-fluid rounded-custom'
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 order-0 order-lg-1'>
              <ul className='work-process-list list-unstyled'>
                <li className='d-flex align-items-start mb-4'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                    <i className='far fa-folder-tree fa-2x'></i>
                  </div>
                  <div className='icon-content'>
                    <span className='text-primary h6'>Step 1</span>
                    <h3 className='h5 mb-2'>Research and Content Planing</h3>
                    <p>
                      Progressively foster enterprise-wide systems whereas
                      equity invested web-readiness harness installed base
                      bandwidth.
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                    <i className='far fa-bezier-curve fa-2x'></i>
                  </div>
                  <div className='icon-content'>
                    <span className='text-primary h6'>Step 2</span>
                    <h3 className='h5 mb-2'>Publishing and Execution</h3>
                    <p>
                      Dramatically administrate progressive metrics without
                      error-free globally simplify standardized alignments
                      plagiarize distributed.
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                    <i className='far fa-layer-group fa-2x'></i>
                  </div>
                  <div className='icon-content'>
                    <span className='text-primary h6'>Step 3</span>
                    <h3 className='h5 mb-2'>Product Prototyping</h3>
                    <p>
                      Interactively whiteboard transparent testing procedures
                      before bricks-and-clicks initiatives administrate
                      competencies.
                    </p>
                  </div>
                </li>
                <li className='d-flex align-items-start mb-4 mb-lg-0'>
                  <div className='process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2'>
                    <i className='far fa-truck fa-2x'></i>
                  </div>
                  <div className='icon-content'>
                    <span className='text-primary h6'>Step 4</span>
                    <h3 className='h5 mb-2'>Deliver the Final Product</h3>
                    <p>
                      Dramatically plagiarize distributed progressive metrics
                      without error-free globally simplify standardized
                      alignments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
