import React from 'react';
import './projectItem.scss';
import Checkbox from '../../Checkbox';

function ProjectItem({projectName, clientName, endDate, status, act}){
  return(
    <div className="row listGroup">
      <div className="listItem projectName">{projectName}</div>
      <div className="listItem">{clientName}</div>
      <div className="listItem">{endDate}</div>
      <div className="listItem progressBar">
        {status}
        <div className="progressCont">
        <div className="progressValue" style={{width: `${status}`}}></div>
        </div>
      </div>
      <div className="listItem checkbox">
        <Checkbox/>
      </div>
      <div className="listItem actIcon" >{act}</div>
    </div>
  )
}

ProjectItem.defaultProps = {
 projectName: "Default Project Name",
  clientName: "Default Client Name",
  endDate: "Default End Date",
  status: "Default Status",
  act: "Default Action",
  completed: false
};

export default ProjectItem;