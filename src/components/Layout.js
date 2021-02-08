import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./Footer"

export const PageContext = React.createContext()

class Layout extends React.Component {
  state = {
    pl: true,
    print: false,
    changeFn: () => this.changeLanguage,
    changePrint: () => this.changePrint(),
  }

  componentDidMount() {
    this.setState({ pl: this.props.lang === "eng" ? false : true })
  }

  changeLanguage = () => this.setState(prevState => ({ pl: !prevState.pl }))

  changePrint = () => {
    this.setState(prevState => ({ print: !prevState.print }))
  }

  render() {
    const { children, style } = this.props

    return (
      <PageContext.Provider value={this.state}>
        <div className="site" style={style}>
          {!this.state.print && (
            <Navbar printFn={this.changePrint} pathname={this.props.pathname} />
          )}
          <main className="site-content">{children}</main>
          {!this.state.print && <Footer />}
        </div>
      </PageContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
