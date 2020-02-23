import React from 'react';
import './progressBar.scss';

function ProgressBar({status}){
    return(
      <div className="progress">
        {status}
        <div className="progressBar">
        <div className="progressValue" style={{width: `${status}`}}></div>
        </div>
      </div>
    )
}

ProgressBar.defaultProps = {
    title:'default'
};

export default ProgressBar;