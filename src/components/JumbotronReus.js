import React from "react"

import ImageReusable from "../components/ImageReusable"
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCard } from "mdbreact"
import { LanguageContext } from "../components/layout"

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
    <>
      <LanguageContext.Consumer>
        {({ print }) => (
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
                    style={{ width: "30rem", marginInlineEnd: 0 }}
                  />
                  {bottomBar && <BottomBar />}
                </MDBCol>

                <MDBCol md="4" className="mt-4 mt-md-0">
                  {(imgSource && (
                    <MDBCard>
                      <ImageReusable className="card-img" source={imgSource} />
                    </MDBCard>
                  )) ||
                    (rightBox && <RightBox />)}
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBJumbotron>
        )}
      </LanguageContext.Consumer>
    </>
  )
}

export default JumbotronReus
