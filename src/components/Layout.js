import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';
import AppContext from '../AppProvider';

import Navbar from './navbar';
import Footer from './Footer';

const Layout = ({ children, style, pathname }) => {
  const { print } = useContext(AppContext);
  return (
    <div className="site" style={style}>
      <Helmet>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        /> */}
      </Helmet>
      {!print && <Navbar pathname={pathname} />}
      <main className="site-content">{children}</main>
      {!print && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
