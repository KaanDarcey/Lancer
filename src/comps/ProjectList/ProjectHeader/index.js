import React from 'react';
import './projectHeader.scss';

function ProjectHeader({projectName, clientName, endDate, status, act}){
  return(
    <div className="row listTitle">
      <div className="listHeader projectlistHeader">{projectName}</div>
      <div className="listHeader">{clientName}</div>
      <div className="listHeader">{endDate}</div>
      <div className="listHeader">{status}</div>
      <div className="listHeader checkbox">{act}</div>
      <div className="listHeader iconHeader"></div>
    </div>
  )
}

ProjectHeader.defaultProps = {
  projectName: "Default Title",
  clientName: "Default Title",
  endDate: "Default Title",
  status: "Default Title",
  act: "Default Title"
};

export default ProjectHeader;