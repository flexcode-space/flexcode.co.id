import React from 'react';
import BlogDetails from '../../components/blog/BlogDetails';
import PageMeta from '../../components/common/PageMeta';
import NewsLetter from '../../components/cta/NewsLetter';
import PageHeader from '../../components/common/PageHeader';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import LatestBlog from '../../components/blog/LatestBlog';
import CtaTwo from '../../components/cta/CtaTwo';

const SingleBlog = () => {
  return (
    <Layout>
      <PageMeta title="Blog Details - Software &amp; IT Solutions HTML Template" />
      <Navbar navDark />
      <PageHeader title="Why customer retention is the ultimate growth strategy" />
      <BlogDetails />
      <NewsLetter />
      <LatestBlog />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default SingleBlog;
