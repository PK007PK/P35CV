import React from "react"

const GrantProjectCard = ({ name, title, value, grant, style }) => {
  return (
    <div style={style} className="card m-2">
      <div
        className="card-body d-flex flex-column justify-content-between"
        style={{ backgroundColor: "#37474F" }}
      >
        {name && (
          <p className="card-text text-center text-white font-weight-bold">
            {name}
          </p>
        )}
        {title && <p className="card-text text-white text-center">{title}</p>}
        <div className="">
          <hr />
          <div className="d-flex justify-content-between text-white card-text">
            <p>Wartość: {value} zł</p>
            <p>Dotacja: {grant} zł</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrantProjectCard
