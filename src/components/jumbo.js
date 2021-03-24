import React, { useContext } from "react"
import Img from "gatsby-image"

import AppContext from '../AppProvider';

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCard } from "mdbreact"

const Jumbo = ({
  title,
  subtitle,
  text,
  bottomBar,
  rightBox,
  style,
  imgSource,
}) => {
  const { pl, print } = useContext(AppContext);
  const Text = text
  const RightBox = rightBox
  const BottomBar = bottomBar
  
  return (
    <MDBJumbotron style={style}>
      <MDBContainer className={print ? "mt-2" : "mt-5"}>
        <MDBRow
          className={
            print
              ? "justify-content-between flex-row-reverse"
              : "justify-content-between"
          }
          style={{ alignItems: "center" }}
        >
          <MDBCol md="7" className={print ? "text-left" : "text-right"}>
            <h1 className="h1">
              {title}
              <br />
              <span className="h3 font-weight-lighter">{subtitle}</span>
            </h1>

            {typeof text === "string" && <p className="my-4">{text}</p>}
            {typeof text === "object" ||
              (typeof text === "function" && <Text />)}
            <hr
              className=""
              style={{ width: "100%", marginInlineEnd: 0 }}
            />
            {bottomBar && <BottomBar />}
          </MDBCol>

          <MDBCol md="4" className="mt-4 mt-md-0">
            {(imgSource && (
              <MDBCard>
                <Img className="card-img" fluid={imgSource} />
              </MDBCard>
            )) ||
              (rightBox && <RightBox />)}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Jumbo
