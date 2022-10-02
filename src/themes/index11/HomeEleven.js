import React from "react";
import CryptoBlog from "../../components/blog/CryptoBlog";
import PageMeta from "../../components/common/PageMeta";
import CryptoAppCta from "../../components/cta/CryptoAppCta";
import CryptoCta from "../../components/cta/CryptoCta";
import CryptoCountDown from "../../components/customer/CryptoCountDown";
import CryptoCustomerCounter from "../../components/customer/CryptoCustomerCounter";
import CryptoTable from "../../components/others/CryptoTable";
import CryptoTimeLine from "../../components/others/CryptoTimeLine";
import CryptoPromo from "../../components/promo/CryptoPromo";
import CryptoTeam from "../../components/team/CryptoTeam";
import CryptoTestimonial from "../../components/testimonial/CryptoTestimonial";
import CryptoFooter from "../../layout/Footer/CryptoFooter";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroEleven from "./HeroEleven";

const HomeEleven = () => {
  return (
    <Layout>
      <PageMeta title="Crypto Currency" />
      <Navbar navDark />
      <HeroEleven />
      <CryptoPromo />
      <CryptoCustomerCounter />
      <CryptoTable />
      <CryptoCountDown />
      <CryptoCta />
      <CryptoTeam />
      <CryptoTimeLine />
      <CryptoTestimonial />
      <CryptoBlog />
      <CryptoAppCta />
      <CryptoFooter />
    </Layout>
  );
};

export default HomeEleven;
