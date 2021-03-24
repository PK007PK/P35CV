import React, { useContext } from "react"
import AppContext from '../AppProvider';

import { MDBProgress } from "mdbreact"

const ProgressBarAndStats = ({
  textBase,
  progres,
  countedAmount,
  countedProjectsValue,
  countedProjectsGrants,
}) => {
  const { pl } = useContext(AppContext)

  return (
    <div className="text-right">
      <MDBProgress height="0.2rem" value={progres} className="my-2" />
      <p className="">
        {pl ? textBase.projectsAmount[0] : textBase.projectsAmount[1]}:{" "}
        {countedAmount}
        <br />
        {pl ? textBase.projectsValue[0] : textBase.projectsValue[1]}:{" "}
        {countedProjectsValue} zł
        <br />
        {pl ? textBase.grants[0] : textBase.grants[1]}: {countedProjectsGrants}{" "}
        zł
      </p>
    </div>
  )
}

export default ProgressBarAndStats
