import React, { useContext } from "react"
import AppContext from '../AppProvider';

import { MDBBtn } from "mdbreact"

const ButtonAnimated = ({ onClick }) => {
  const { pl } = useContext(AppContext)
  return (
    <div
      style={{
        minHeight: "360px",
        width: "100%",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div>
        <MDBBtn color="pink" onClick={onClick}>
          {pl ? "Wczytaj dane" : "Click to load data"}
        </MDBBtn>
      </div>
    </div>
  )
}

export default React.memo(ButtonAnimated)
