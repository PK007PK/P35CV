import React, { useContext } from "react"
import PropTypes from "prop-types"

import AppContext from '../AppProvider';

const GrantProjectCard = ({ name, title, value, grant, style, whiteText }) => {
  const { pl } = useContext(AppContext)
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
        <small className="">
          {pl ? "Wartość" : "Value"}: {value} zł
        </small>
        <small className="">
          {pl ? "Dotacja" : "Grant"}: {grant} zł
        </small>
      </div>
    </div>
  )
}

GrantProjectCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  grant: PropTypes.string,
  style: PropTypes.object,
  whiteText: PropTypes.bool,
}

export default GrantProjectCard
