import React from 'react';
import './projectItem.scss';
import Checkbox from '../../Checkbox';
import ProgressBar from '../../ProgressBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function ProjectItem({projectName, clientName, endDate, status, act}){
  return(
    <NavLink to="/TaskPage" style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className="row listGroup">
        <div className="listItem projectName">{projectName}</div>
        <div className="listItem">{clientName}</div>
        <div className="listItem">{endDate}</div>
        <div className="listItem">
          <ProgressBar status={status}/>
        </div>
        <div className="listItem checkbox">
          <Checkbox/>
        </div>
        <div className="listItem actIcon" >{act}</div>
      </div>
    </NavLink>
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