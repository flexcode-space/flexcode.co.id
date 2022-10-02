import React from 'react';
import { Helmet } from 'react-helmet';

const PageMeta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageMeta;
