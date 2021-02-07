import React, { useContext } from "react"
import { PageContext } from "../components/layout"
import { MDBCard, MDBCardBody, MDBIcon, MDBCardText } from "mdbreact"

const FundList = ({ list }) => {
  const { pl } = useContext(PageContext)

  return list.map((item, index) => (
    <MDBCard
      key={index}
      className="mb-4"
      style={{
        backgroundColor: "#2E2E2E",
        color: "white",
      }}
    >
      <MDBCardBody>
        <MDBCardText className="text-center text-white">
          <MDBIcon far icon="bookmark" className="mr-2" />
          {pl ? item[0] : item[1]}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  ))
}

export default FundList
