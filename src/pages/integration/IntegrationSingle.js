import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import CtaTwo from '../../components/cta/CtaTwo';
import IntegrationDetail from '../../components/integration/IntegrationDetail';
import RelatedIntegration from '../../components/integration/RelatedIntegration';
import PageHeader from '../../components/common/PageHeader';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const IntegrationSingle = () => {
  return (
    <Layout>
      <PageMeta title="Integration Details-Software &amp; IT Solutions HTML Templat" />
      <Navbar navDark />
      <PageHeader
        title="Connect with Google"
        desc="Objectively fabricate strategic products for high-impact materials."
        integration
      />
      <IntegrationDetail />
      <RelatedIntegration />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default IntegrationSingle;
