import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"

export const LanguageContext = React.createContext()

class Layout extends React.Component {
  state = { pl: true, print: false, changeFn: () => this.changeLanguage }

  componentDidMount() {
    this.setState({ pl: this.props.lang === "eng" ? false : true })
  }

  componentDidUpdate() {
    // console.log("Pl w state po update: ", this.state.pl)
  }

  changeLanguage = () => this.setState(prevState => ({ pl: !prevState.pl }))

  changePrint = () => {
    this.setState(prevState => ({ print: !prevState.print }))
    setTimeout(() => {
      this.setState(prevState => ({ print: !prevState.print }))
    }, 30000)
  }

  render() {
    const { children, style } = this.props

    return (
      <LanguageContext.Provider value={this.state}>
        <div className="site" style={style}>
          {!this.state.print && (
            <Navbar printFn={this.changePrint} pathname={this.props.pathname} />
          )}
          <main className="site-content">{children}</main>
          {!this.state.print && <Footer />}
        </div>
      </LanguageContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
