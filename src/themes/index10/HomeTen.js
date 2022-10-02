import React from "react";
import CyberAbout from "../../components/about/CyberAbout";
import CyberBlog from "../../components/blog/CyberBlog";
import PageMeta from "../../components/common/PageMeta";
import CyberCta from "../../components/cta/CyberCta";
import CustomerLogoSlider from "../../components/customer/CustomerLogoSlider";
import CyberFaq from "../../components/faqs/CyberFaq";
import CyberStore from "../../components/others/CyberStore";
import PriceFour from "../../components/prices/PriceFour";
import CyberVideoPromo from "../../components/promo/CyberVideoPromo";
import CyberService from "../../components/services/CyberService";
import TestimonialFour from "../../components/testimonial/TestimonialFour";
import FooterTwo from "../../layout/Footer/FooterTwo";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroTen from "./HeroTen";

const HomeTen = () => {
  return (
    <Layout>
      <PageMeta title="Cyber Security- Software &amp; IT Solutions HTML Template" />
      <Navbar navDark />
      <HeroTen />
      <CustomerLogoSlider />
      <CyberAbout />
      <CyberService />
      <CyberCta />
      <CyberVideoPromo />
      <PriceFour />
      <CyberStore />
      <TestimonialFour />
      <CyberFaq />
      <CyberBlog />
      <FooterTwo />
    </Layout>
  );
};

export default HomeTen;
