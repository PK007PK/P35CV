import React, {useContext} from "react"
import AppContext from '../AppProvider';

import Layout from "../components/Layout"
import Jumbo from "../components/Jumbo"
import Form from "../components/Form"
import SEO from "../components/seo"

const ContactPage = ({ location }) => {
  const { pl } = useContext(AppContext);
  const contactInfo = () => (
    <div className="text-right">
      <button
        href="tel:509527925"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-blue waves-effect"
      >
        {pl ? "Tel:" : "Phone:"} 509 527 925
      </button>
      <button
        href="mailto:krasny.piotr@gmail.com.com"
        target="_blank"
        color="blue"
        rel="noopener noreferrer"
        className="btn btn-blue waves-effect mr-md-0"
      >
        krasny.piotr@gmail.com
      </button>
    </div>
  )

  return (
    <Layout
      lang={location && location.state && location.state.lang}
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <SEO title={pl ? "Kontakt" : "Contact"} />
      <Jumbo
        title={"Piotr Krasny"}
        subtitle={pl ? "Kontakt" : "Contact"}
        bottomBar={contactInfo}
        rightBox={Form}
        style={{
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          minHeight: "100%",
          marginBottom: 0,
        }}
      />
    </Layout>
  )
}

export default ContactPage
