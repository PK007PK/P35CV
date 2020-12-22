import React from "react"
import Image from "../components/image"

import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact"

const subpageHeading = ({ title, subtitle, textBlock, graphicBlock }) => {
  const TextBlock = textBlock
  const GraphicBlock = graphicBlock

  return (
    <MDBJumbotron
      style={{
        backgroundColor: "#f5f5f5",
        boxShadow: "none",
      }}
    >
      <MDBContainer className="mt-5 ">
        <MDBRow className="" style={{ alignItems: "center" }}>
          <MDBCol>
            <h1 className="h1 text-center">
              {title}
              <br />
              <span className="h3 font-weight-lighter">{subtitle}</span>
            </h1>
            {TextBlock && <TextBlock />}
            <hr className="" style={{ width: "30rem" }} />
            <div className="pt-2 text-right">
              {GraphicBlock && <GraphicBlock />}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default subpageHeading
