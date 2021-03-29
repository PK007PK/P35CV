import React, { useContext } from "react"
import AppContext from '../AppProvider';

const FundList = ({ list }) => {
  const { pl } = useContext(AppContext)

  return list.map((item, index) => (
    <div className="card"
      key={index}
      className="mb-4"
      style={{
        backgroundColor: "#2E2E2E",
        color: "white",
      }}
    >
      <div className="card-body">
        <p className="card-text text-center text-white">
          <i className="fas fa-bookmark mr-2" />
          {pl ? item[0] : item[1]}
        </p>
      </div>
    </div>
  ))
}

export default FundList
