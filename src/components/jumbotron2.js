import React from "react"
import Image from "../components/image"

import { MDBJumbotron, MDBRow } from "mdbreact"

const Jumbotron2 = () => {
  return (
    <MDBJumbotron
      style={{
        backgroundColor: "#f5f5f5",
        boxShadow: "none",
      }}
      className="mb-0"
    >
      <MDBRow>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb
          niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (RODO).
        </p>
      </MDBRow>
    </MDBJumbotron>
  )
}

export default Jumbotron2
