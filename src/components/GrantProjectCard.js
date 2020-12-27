import React from "react"

const GrantProjectCard = ({ name, title, value, grant, style, whiteText }) => {
  return (
    <div style={style} className="card">
      <div className="card-body d-flex flex-column justify-content-between">
        {name && (
          <p
            className={
              whiteText
                ? "card-text font-weight-bold text-white"
                : "card-text font-weight-bold"
            }
          >
            {name}
          </p>
        )}
        {title && (
          <p className={whiteText ? "card-text text-white" : "card-text"}>
            {title}
          </p>
        )}
        <div className=""></div>
      </div>
      <div className="card-footer d-flex justify-content-between ">
        <small class="">Wartość: {value} zł</small>
        <small class="">Dotacja: {grant} zł</small>
      </div>
    </div>
  )
}

export default GrantProjectCard
