import React from 'react';
import './listTitle.scss';

function ListTitle({projectName, clientName, endDate, status}){
  return(
    <div className="row listTitle">
      <div className="title projectTitle">{projectName}</div>
      <div className="title">{clientName}</div>
      <div className="title">{endDate}</div>
      <div className="title">{status}</div>
      <div className="title emp"></div>
    </div>
  )
}

ListTitle.defaultProps = {
  projectName: "Default Title",
  clientName: "Default Title",
  endDate: "Default Title",
  status: "Default Title",
};

export default ListTitle;