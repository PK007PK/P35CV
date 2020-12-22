import React from "react"
import Image from "../components/image"

import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact"

const Jumbotron = () => {
  return (
    <MDBJumbotron
      style={{
        backgroundColor: "#f5f5f5",
        boxShadow: "none",
      }}
    >
      <MDBContainer className="mt-5 text-center">
        <MDBRow
          className="justify-content-between"
          style={{ alignItems: "center" }}
        >
          <MDBCol lg={7}>
            <h1 className="h1 text-right">
              Piotr Krasny
              <br />
              <span className="h3 font-weight-lighter">Curriculum Vitae</span>
            </h1>
            <p className="text-right my-4">
              Dziękuję, że odwiedziłaś / odwiedziłeś moją stronę.
              <br /> Zapraszam Cię do zapoznania się z moim CV, oraz projektami
              które wykonałem.<br></br>Mam nadzieję, że uda nam się nawiązać
              korzystną współpracę
            </p>

            <hr className="" style={{ width: "30rem", marginInlineEnd: 0 }} />

            <div className="pt-2 text-right">
              <MDBBtn
                href="https://github.com/zlutfi/gatsby-starter-mdbreact"
                target="_blank"
                color="indigo"
                rel="noopener noreferrer"
                className="waves-effect ml-4"
              >
                CV PDF
                <MDBIcon fas icon="file-pdf" className="ml-2" />
              </MDBBtn>
              <MDBBtn
                href="https://github.com/zlutfi/gatsby-starter-mdbreact"
                target="_blank"
                color="pink"
                rel="noopener noreferrer"
                className="waves-effect"
              >
                LinkedIn <MDBIcon fab icon="linkedin-in" className="ml-2" />
              </MDBBtn>
              <MDBBtn
                href="https://github.com/zlutfi/gatsby-starter-mdbreact"
                target="_blank"
                color="amber"
                rel="noopener noreferrer"
                className="waves-effect mr-0"
              >
                Github <MDBIcon fab icon="github" className="ml-2" />
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol lg={4}>
            <Image />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Jumbotron
