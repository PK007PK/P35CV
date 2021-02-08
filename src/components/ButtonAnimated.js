import React, { useContext } from "react"

import { PageContext } from "../components/layout"
import { MDBAnimation, MDBBtn } from "mdbreact"

const ButtonAnimated = ({ onClick }) => {
  const { pl } = useContext(PageContext)
  return (
    <div
      style={{
        minHeight: "360px",
        width: "100%",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <MDBAnimation reveal type="rollIn">
          <MDBBtn color="pink" onClick={onClick}>
            {pl ? "Wczytaj dane" : "Click to load data"}
          </MDBBtn>
        </MDBAnimation>
      </div>
    </div>
  )
}

export default React.memo(ButtonAnimated)
