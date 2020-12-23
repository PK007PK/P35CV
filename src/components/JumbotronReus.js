import React from "react"

import ImageReusable from "../components/ImageReusable"
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact"

const JumbotronReus = ({
  title,
  subtitle,
  text,
  bottomBar,
  rightBox,
  style,
  imgSource,
}) => {
  const Text = text
  const RightBox = rightBox
  const BottomBar = bottomBar
  return (
    <MDBJumbotron style={style}>
      <MDBContainer className="mt-5 text-center">
        <MDBRow
          className="justify-content-between"
          style={{ alignItems: "center" }}
        >
          <MDBCol lg={7}>
            <h1 className="h1 text-right">
              {title}
              <br />
              <span className="h3 font-weight-lighter">{subtitle}</span>
            </h1>

            {typeof text === "string" && (
              <p className="text-right my-4">{text}</p>
            )}
            {typeof text === "object" ||
              (typeof text === "function" && <Text />)}
            <hr className="" style={{ width: "30rem", marginInlineEnd: 0 }} />
            {bottomBar && <BottomBar />}
          </MDBCol>
          <MDBCol lg={4}>
            {(imgSource && <ImageReusable source={imgSource} />) ||
              (rightBox && <RightBox />)}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default JumbotronReus
