import React, { useContext } from "react"
import { graphql } from 'gatsby'

import AppContext from '../AppProvider';

import Layout from "../components/Layout"
import Jumbo from "../components/Jumbo"
import SEO from "../components/seo"

const ContactThanksPage = ({ data, location }) => {
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
  const thanksTxt = () => (
    <div className="card">
      <div className="card-body text-left">
        <h5 className="card-title mt-5">
          {pl ? "Wiadomość wysłana" : "Message sent"}
        </h5>
        <p className="card-text">
          {pl
            ? "Dziękuję za wysłanie wiadomości. Postaram sie odpowiedzieć bezzwłocznie"
            : "Thank you for your message. I will try to respond immediately"}
        </p>
        <p className="card-text mb-5">
          {pl ? "Pozdrawiam" : "Kind regards"}
        </p>
      </div>
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
        // text={textForJumbo}
        bottomBar={contactInfo}
        rightBox={thanksTxt}
        style={{
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          minHeight: "100%",
          marginBottom: 0,
        }}
        // imgSource={jumbotronImg}
      />

    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "pk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactThanksPage
