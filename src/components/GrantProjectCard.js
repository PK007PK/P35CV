import React from "react"

import { LanguageContext } from "./layout"

const GrantProjectCard = ({ name, title, value, grant, style, whiteText }) => {
  return (
    <LanguageContext.Consumer>
      {({ pl }) => (
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
            <small className="">
              {pl ? "Wartość" : "Value"}: {value} zł
            </small>
            <small className="">
              {pl ? "Dotacja" : "Grant"}: {grant} zł
            </small>
          </div>
        </div>
      )}
    </LanguageContext.Consumer>
  )
}

export default GrantProjectCard
