import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import CtaFive from '../../components/cta/CtaFive';
import CtaFour from '../../components/cta/CtaFour';
import FeatureImgContentFive from '../../components/feature-img-content/FeatureImgContentFive';
import FeatureImgContentSix from '../../components/feature-img-content/FeatureImgContentSix';
import FeatureFive from '../../components/features/FeatureFive';
import PromoWithVideo from '../../components/promo/PromoWithVideo';
import TestimonialThree from '../../components/testimonial/TestimonialThree';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import HeroEight from './HeroEight';

const HomeAppTwo = () => {
  return (
    <Layout>
      <PageMeta title='App Landing- Software &amp; IT Solutions HTML Template' />
      <Navbar navDark />
      <HeroEight />
      <FeatureFive />
      <FeatureImgContentFive />
      <FeatureImgContentSix />
      <CtaFour />
      <TestimonialThree />
      <PromoWithVideo />
      <CtaFive />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeAppTwo;
