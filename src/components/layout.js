import React, {useContext} from "react"
import PropTypes from "prop-types"
import AppContext from '../AppProvider';

import Navbar from "./navbar"
import Footer from "./Footer"


const Layout =({children, style, pathname}) => {
  const { print } = useContext(AppContext);
  return (
    <div className="site" style={style}>
      <Navbar pathname={pathname}/>
      <main className="site-content">{children}</main>
      {!print && <Footer />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
