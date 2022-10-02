import React from "react";
import PageMeta from "../components/common/PageMeta";
import PortfolioDetails from "../components/portfolio/PortfolioDetails";
import PortfolioPageHeader from "../components/portfolio/PortfolioPageHeader";
import FooterOne from "../layout/Footer/FooterOne";
import Navbar from "../layout/Header/Navbar";
import Layout from "../layout/Layout";

const SinglePortfolio = () => {
  return (
    <Layout>
      <PageMeta title="Portfolio Details - Quiety Website Design Project." />
      <Navbar />
      <PortfolioPageHeader />
      <PortfolioDetails />
      <FooterOne footerLight />
    </Layout>
  );
};

export default SinglePortfolio;
