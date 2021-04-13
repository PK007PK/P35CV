import React, { useContext } from 'react';
import AppContext from '../AppProvider';

const ProgressBarAndStats = ({
  textBase,
  progress,
  countedAmount,
  countedProjectsValue,
  countedProjectsGrants,
}) => {
  const { pl } = useContext(AppContext);

  return (
    <div className="text-right">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
            width: `${progress}%`,
            height: '0.2rem',
            backgroundColor: 'blue',
          }}
          className="my-2"
        />
      </div>
      <p className="">
        {pl ? textBase.projectsAmount[0] : textBase.projectsAmount[1]}:{' '}
        {countedAmount}
        <br />
        {pl ? textBase.projectsValue[0] : textBase.projectsValue[1]}:{' '}
        {countedProjectsValue} zł
        <br />
        {pl ? textBase.grants[0] : textBase.grants[1]}: {countedProjectsGrants}{' '}
        zł
      </p>
    </div>
  );
};

export default ProgressBarAndStats;
