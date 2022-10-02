import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import ContactFormThree from '../../components/contact/ContactFormThree';
import FaqOne from '../../components/faqs/FaqOne';
import FeatureImgContent from '../../components/feature-img-content/FeatureImgContent';
import FeatureImgContentTwo from '../../components/feature-img-content/FeatureImgContentTwo';
import FeatureFour from '../../components/features/FeatureFour';
import FeatureWithBg from '../../components/features/FeatureWithBg';
import HeroSeven from './HeroSeven';
import PriceOne from '../../components/prices/PriceOne';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const HomeDataAnalysis = () => {
  return (
    <Layout>
      <PageMeta title='Data Analysis- Software &amp; IT Solutions HTML Template' />
      <Navbar navDark />
      <HeroSeven />
      <FeatureFour />
      <FeatureImgContentTwo />
      <FeatureImgContent />
      <FeatureWithBg />
      <PriceOne paddingTop='ptb-120' haspriceTitleWithHeader />
      <FaqOne />
      <ContactFormThree />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeDataAnalysis;
