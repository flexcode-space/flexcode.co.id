import React, { Component } from 'react';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import HeroOne from './HeroOne';
import FeatureImgContentFour from '../../components/feature-img-content/FeatureImgContentFour';
import FeatureImg from '../../components/features/FeatureImg';
import PageMeta from '../../components/common/PageMeta';
import TestimonialOne from '../../components/testimonial/TestimonialOne';
import WorkProcess from '../../components/work-process/WorkProcess';
import PriceOne from '../../components/prices/PriceOne';
import FaqOne from '../../components/faqs/FaqOne';
import IntegrationOne from '../../components/integration/IntegrationOne';
import CtaOne from '../../components/cta/CtaOne';
import FooterOne from '../../layout/Footer/FooterOne';
import FeatureOne from '../../components/features/FeatureOne';

class HomeSassOne extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title='Quiety - Software &amp; IT Solutions HTML Template' />
        <Navbar navDark />
        <HeroOne />
        <FeatureOne />
        <FeatureImgContentFour />
        <FeatureImg />
        <TestimonialOne darkBg />
        <WorkProcess />
        <PriceOne paddingTop='pt-60 pb-120' haspriceTitleWithHeader />
        <FaqOne />
        <IntegrationOne />
        <CtaOne />
        <FooterOne footerGradient />
      </Layout>
    );
  }
}

export default HomeSassOne;
