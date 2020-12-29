import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"

export const LanguageContext = React.createContext()

class Layout extends React.Component {
  state = { pl: true, changeFn: () => this.changeLanguage }

  changeLanguage = () => this.setState(prevState => ({ pl: !prevState.pl }))

  render() {
    const { children, style } = this.props

    return (
      <LanguageContext.Provider value={this.state}>
        <div className="site" style={style}>
          <Navbar />
          <main className="site-content">{children}</main>
          <Footer />
        </div>
      </LanguageContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
