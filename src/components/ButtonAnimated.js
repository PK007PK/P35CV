import React, { useContext } from "react"
import AppContext from '../AppProvider';

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
        <button className="btn text-white" style={{backgroundColor: "#ec407a"}} onClick={onClick}> 
          {pl ? "Wczytaj dane" : "Click to load data"}
        </button>
      </div>
    </div>
  )
}

export default React.memo(ButtonAnimated)
