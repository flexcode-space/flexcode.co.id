import React from "react";
import DetailsTab from "../../components/cyber-product/DetailsTab";
import Product from "../../components/cyber-product/Product";
import RelatedProduct from "../../components/cyber-product/RelatedProduct";
import FooterOne from "../../layout/Footer/FooterOne";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const SingleProduct = () => {
  return (
    <Layout>
      <Navbar />
      <Product />
      <DetailsTab />
      <RelatedProduct />
      <FooterOne footerLight />
    </Layout>
  );
};

export default SingleProduct;
