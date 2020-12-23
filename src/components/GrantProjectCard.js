import React from "react"

const GrantProjectCard = ({ name, title, value, grant, style }) => {
  return (
    // <div style={{ flexBasis: "250px", flexGrow: 1 }} className="card m-2">
    <div style={style} className="card m-2">
      <div className="card-body d-flex flex-column justify-content-between">
        {name && (
          <p className="card-text text-center font-weight-bold">{name}</p>
        )}
        {title && <p className="card-text text-center">{title}</p>}
        <div className="">
          <hr />
          <div className="d-flex justify-content-between card-text">
            <p>Wartość: {value} zł</p>
            <p>Dotacja: {grant} zł</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrantProjectCard
