import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import PageMeta from '../../components/common/PageMeta';
import Navbar from '../../layout/Header/Navbar';
import CtaSubscribe from '../../components/cta/CtaSubscribe';
import IntegrationThree from '../../components/integration/IntegrationThree';
import Promo from '../../components/promo/Promo';
import FooterOne from '../../layout/Footer/FooterOne';
import Layout from '../../layout/Layout';

const Integrations = () => {
  return (
    <Layout>
      <PageMeta title="Integrations - Software &amp; IT Solutions HTML Templat" />
      <Navbar navDark />
      <PageHeader
        title="Our Featured Integrations"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <IntegrationThree />
      <Promo bgWhite />
      <CtaSubscribe />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Integrations;
