import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import HeroSix from './HeroSix';
import TestimonialTwo from '../../components/testimonial/TestimonialTwo';
import CtaTwo from '../../components/cta/CtaTwo';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import IntegrationTwo from '../../components/integration/IntegrationTwo';
import FeatureImgThree from '../../components/features/FeatureImgThree';
import Customer from '../../components/customer/Customer';
import WorkProcessFour from '../../components/work-process/WorkProcessFour';
import PromoThree from '../../components/promo/PromoThree';
import FeatureImgEight from '../../components/features/FeatureImgEight';
import FeatureTwo from '../../components/features/FeatureTwo';

const HomeStartup = () => {
  return (
    <Layout>
      <PageMeta title='Startup - Software &amp; IT Solutions HTML Template' />
      <Navbar navDark posAbsolute />
      <HeroSix />
      <Customer gray />
      <PromoThree />
      <FeatureImgThree />
      <FeatureImgEight />
      <FeatureTwo cardDark />
      <WorkProcessFour />
      <IntegrationTwo />
      <TestimonialTwo bgWhite/>
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeStartup;
