import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
} from "mdbreact"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Jumbotron2 from "../components/jumbotron2"
import JumbotronReus from "../components/JumbotronReus"

const IndexPage = ({ data }) => {
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid

  const textForJumbo = () => (
    <p className="text-right my-4">
      Dziękuję, że odwiedziłaś / odwiedziłeś moją stronę.
      <br /> Zapraszam Cię do zapoznania się z moim CV, oraz projektami które
      wykonałem.<br></br>Mam nadzieję, że uda nam się nawiązać korzystną
      współpracę
    </p>
  )

  const buttonsForJumbo = () => (
    <div className="pt-2 text-right">
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="indigo"
        rel="noopener noreferrer"
        className="waves-effect ml-4"
      >
        CV PDF
        <MDBIcon fas icon="file-pdf" className="ml-2" />
      </MDBBtn>
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="pink"
        rel="noopener noreferrer"
        className="waves-effect"
      >
        LinkedIn <MDBIcon fab icon="linkedin-in" className="ml-2" />
      </MDBBtn>
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="amber"
        rel="noopener noreferrer"
        className="waves-effect mr-0"
      >
        Github <MDBIcon fab icon="github" className="ml-2" />
      </MDBBtn>
    </div>
  )

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <JumbotronReus
        title={"Piotr Krasny"}
        subtitle={"Curriculum Vitae"}
        text={textForJumbo}
        bottomBar={buttonsForJumbo}
        // rightBox={}
        style={{
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          minHeight: "520px",
        }}
        imgSource={jumbotronImg}
      />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="7" className="text-right">
            <h2 className="h3">Doświadczenie zawodowe</h2>
            <p className="lead">
              06.2004 - 12.2020: Masterprojekt s.c.
              <br /> Współwłaściciel. Project Manager
              <br /> Konsultant Funduszy Europejskich
            </p>
            <p>
              {" "}
              Masterprojekt s.c. to firma doradcza obsługująca podmioty sektora
              ochrony zdrowia w zakresie pozyskiowania środków zewnętrznych na
              finansowanie inwestycji. Obszarem naszych zainteresowań były
              fundusze strukturalne UE oraz środki krajowe. Firma dla swoich
              klientów pozyskała około 480 mln zł dotacji na blisko 180
              projektów inwestycyjnych
            </p>
          </MDBCol>
          <MDBCol
            md="5"
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <MDBCard className="" style={{ width: "350px" }}>
              <MDBCardBody>
                <p className="h2 text-center font-weight-lighter mb-0">
                  480 mln PLN bezzwrotnych dotacji pozyskanych dla moich
                  klientów
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-5">
          <MDBCol md="7" className="text-right">
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong className="h5">Przygotowanie dokumentacji</strong>
                <br></br>
                Studia wykonalności inwestycji, biznes plany, wnioski
                aplikacyjne, kompletowanie dokumentów wymaganych w procesie
                inwestycyjnym
              </li>
              <li className="mb-3">
                <strong className="h5">Obsługa finansowa projektów</strong>
                <br></br>Prognozy finansowe, analizy efektywności ekonomicznej,
                kalkulacja wskaźników, przygotowanie arkuszy MsExcel
              </li>
              <li className="mb-3">
                <strong className="h5">Rozliczanie projektów</strong>
                <br></br>
                Kontrola realizacji projektu, aneksowanie umów, przygotowanie
                wniosków o płatność
              </li>
            </ul>
          </MDBCol>
          <MDBCol
            md="5"
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <MDBCard className="" style={{ width: "350px" }}>
              <MDBCardBody>
                <p className="h4 text-center font-weight-lighter mb-0">
                  Bezpośrednia praca z klientem przy realizacji zleceń
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-5">
          <MDBCol md="7" className="text-right">
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong className="h5">Opracowanie usług doradczych</strong>
                <br></br>Analiza rynku, tworzenie koncepcji usług,
                przygotowanie: umów, ofert, narzędzi zapewniających efektywność
                pracy
              </li>
              <li className="mb-3">
                <strong className="h5">Zarządzanie projektami</strong>
                <br></br>Z arządzanie planem produkcji, delegowanie zadań,
                rozwiązywanie problemów, kontrola
              </li>
              <li className="mb-3">
                <strong className="h5">Zarządzanie personelem</strong>
                <br></br>Pracownicy etatowi i zewnętrzni współpracownicy: nadzór
                nad wykonywanymi zleceniami, kontrola wykonywanych zadań,
                prowadzenie rozmów kwalifikacyjnych, motywowanie pracowników,
                coaching
              </li>
            </ul>
          </MDBCol>
          <MDBCol
            md="5"
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <MDBCard className="" style={{ width: "350px" }}>
              <MDBCardBody>
                <p className="h4 text-center font-weight-lighter mb-0 ">
                  Organizacja i zarządzanie firmą
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-right mt-5">
          <MDBCol md="7" className="text-righ">
            <h2 className="h3">Edukacja</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong className="h5">2003 - 2004</strong>
                <br></br> Politechnika Krakowska
                <br /> Studia podyplomowe. Gospodarka nieruchomościami
              </li>
              <li className="mb-3">
                <strong className="h5">X.1997 - VI.2001:</strong>
                <br></br> Uniwersytet Ekonomiczny w Krakowie
                <br /> Wydział Zarządzania: Rachunkowość, Zarządzanie firmą
              </li>
              <li className="mb-3">
                <strong className="h5">1993 - 1997:</strong>
                <br></br> V Liceum Ogólnokształcące im. A. Witkowskiego w
                Krakowie
              </li>
            </ul>
          </MDBCol>
          <MDBCol
            md="5"
            className="d-flex flex-column align-items-end justify-content-center"
          >
            <MDBCard className="" style={{ width: "350px" }}>
              <MDBCardBody className="">
                <div className="d-flex justify-content-around align-items-center">
                  <i className="politechnika"></i>
                  <i className="ekonomiczna"></i>
                  <i className="lo"></i>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
        }}
        className="mt-5"
      >
        <MDBContainer>
          <Jumbotron2 className="mt-5"></Jumbotron2>
        </MDBContainer>
      </div>
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

export default IndexPage
