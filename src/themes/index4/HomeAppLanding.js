import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import ContactFormThree from '../../components/contact/ContactFormThree';
import FaqThree from '../../components/faqs/FaqThree';
import FeatureFour from '../../components/features/FeatureFour';
import FeatureImgFive from '../../components/features/FeatureImgFive';
import FeatureImgFour from '../../components/features/FeatureImgFour';
import HeroFour from './HeroFour';
import PriceTwo from '../../components/prices/PriceTwo';
import TestimonialTwo from '../../components/testimonial/TestimonialTwo';
import WorkProcessThree from '../../components/work-process/WorkProcessThree';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const HomeAppLanding = () => {
  return (
    <Layout>
      <PageMeta title='Quiety - Software &amp; IT Solutions HTML Template' />
      <Navbar navDark />
      <HeroFour />
      <FeatureFour />
      <FeatureImgFour />
      <FeatureImgFive />
      <WorkProcessThree />
      <PriceTwo />
      <FaqThree />
      <TestimonialTwo />
      <ContactFormThree />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeAppLanding;
