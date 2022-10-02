import React, { Component } from 'react';
import PageMeta from '../../components/common/PageMeta';
import LoginScreen from '../../components/onboard/LoginScreen';
import Layout from '../../layout/Layout';

class Login extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title='Welcome Back - Software &amp; IT Solutions HTML Templat' />
        <LoginScreen />
      </Layout>
    );
  }
}
export default Login;
