import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import PageMeta from '../../components/common/PageMeta';
import FeatureImgContentThree from '../../components/feature-img-content/FeatureImgContentThree';
import FeatureImgEight from '../../components/features/FeatureImgEight';
import RequestForDemo from '../../components/others/RequestForDemo';
import PromoThree from '../../components/promo/PromoThree';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const SingleService = () => {
  return (
    <Layout>
      <PageMeta title="Service Details-Software &amp; IT Solutions HTML Template" />
      <Navbar navDark />
      <PageHeader
        title="Quality Software Services"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <FeatureImgEight paddingTop />
      <FeatureImgContentThree />
      <PromoThree hasBg />
      <RequestForDemo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default SingleService;
