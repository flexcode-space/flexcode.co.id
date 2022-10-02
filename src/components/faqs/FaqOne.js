import React from 'react';
import { FaqOneData } from '../../data';
import SectionTitle from '../common/SectionTitle';

const FaqOne = () => {
  return (
    <>
      <section className='faq-section ptb-120 bg-light'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-6'>
              <SectionTitle
                subtitle='FAQ'
                title='Frequently Asked Questions'
                description='Conveniently mesh cooperative services via magnetic
                  outsourcing. Dynamically grow value whereas accurate
                  e-commerce vectors.'
                centerAlign
              />
            </div>
          </div>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-5 col-12'>
              <div className='faq-wrapper'>
                {FaqOneData.map((data) => (
                  <div className='faq-item mb-5' key={data.id}>
                    <h5>
                      <span className='h3 text-primary me-2'>{data.id}.</span>
                      {data.faqTitle}
                    </h5>
                    <p>
                      Progressively e-enable collaborative inexpensive supply
                      chains. Efficiently maintain economically methods of
                      empowerment for synergistic sound scenarios.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='text-center mt-4 mt-lg-0 mt-md-0'>
                <img src='assets/img/faq.svg' alt='faq' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
