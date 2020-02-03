import React from 'react';
import './listItem.scss';
import {FaEdit} from 'react-icons/fa';

function ListItem({projectName, clientName, endDate, status}){
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
      <div className="listItem editIcon" ><FaEdit/></div>
    </div>
  )
}

ListItem.defaultProps = {
  projectName: "Default Project Name",
  clientName: "Default Client Name",
  endDate: "Default End Date",
  status: "Default Status",
};

export default ListItem;