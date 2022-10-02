import React from "react";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import PageMeta from "../../components/common/PageMeta";
import FooterOne from "../../layout/Footer/FooterOne";
import HeroTwo from "./HeroTwo";
import ReviewOne from "../../components/review/ReviewOne";
import FeatureTwo from "../../components/features/FeatureTwo";
import WorkProcessTwo from "../../components/work-process/WorkProcessTwo";
import IntegrationOne from "../../components/integration/IntegrationOne";
import CtaTwo from "../../components/cta/CtaTwo";
import TestimonialOne from "../../components/testimonial/TestimonialOne";
import LatestBlog from "../../components/blog/LatestBlog";

const HomeSassTwo = () => {
  return (
    <Layout>
      <PageMeta title="Quiety - Software &amp; IT Solutions HTML Template" />
      <Navbar />
      <HeroTwo />
      <ReviewOne />
      <FeatureTwo />
      <WorkProcessTwo />
      <TestimonialOne hasSubtitle />
      <IntegrationOne />
      <LatestBlog />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeSassTwo;
