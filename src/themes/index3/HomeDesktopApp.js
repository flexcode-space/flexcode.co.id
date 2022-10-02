import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import CtaTwo from '../../components/cta/CtaTwo';
import Customer from '../../components/customer/Customer';
import FeatureImgThree from '../../components/features/FeatureImgThree';
import FetaureImgTwo from '../../components/features/FetaureImgTwo';
import HeroThree from './HeroThree';
import IntegrationTwo from '../../components/integration/IntegrationTwo';
import Promo from '../../components/promo/Promo';
import TestimonialTwo from '../../components/testimonial/TestimonialTwo';
import WorkProcess from '../../components/work-process/WorkProcess';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const HomeDesktopApp = () => {
  return (
    <Layout>
      <PageMeta title='Desktop App - Software &amp; IT Solutions HTML Template' />
      <Navbar classOption='navbar-light' />
      <HeroThree />
      <Customer />
      <Promo />
      <FeatureImgThree paddingTop />
      <FetaureImgTwo />
      <WorkProcess />
      <TestimonialTwo dark />
      <IntegrationTwo />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeDesktopApp;
