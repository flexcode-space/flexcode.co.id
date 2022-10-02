import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import PasswordResetScreen from '../../components/onboard/PasswordResetScreen';
import Layout from '../../layout/Layout';

const PasswordReset = () => {
  return (
    <Layout>
      <PageMeta title='Password Reset - Software &amp; IT Solutions HTML Template' />
      <PasswordResetScreen />
    </Layout>
  );
};

export default PasswordReset;
