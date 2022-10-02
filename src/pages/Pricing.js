import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import CtaSubscribe from '../components/cta/CtaSubscribe';
import FaqTwo from '../components/faqs/FaqTwo';
import PriceOne from '../components/prices/PriceOne';
import TestimonialTwo from '../components/testimonial/TestimonialTwo';
import FooterOne from '../layout/Footer/FooterOne';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';

const Pricing = () => {
  return (
    <Layout>
      <PageMeta title='Pricing - Software &amp; IT Solutions HTML Template ' />
      <Navbar />
      <PageHeader
        title='Price Suit to Your Business'
        desc='Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise.'
      />
      <PriceOne paddingTop='ptb-120'/>
      <FaqTwo />
      <TestimonialTwo bgWhite/>
      <CtaSubscribe />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Pricing;
