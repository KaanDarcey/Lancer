import React from 'react';
import './clientItem.scss';

function ClientItem({clientName, company, phone, email, totalProjects, act}){
  return(
    <div className="row clientListCont">
      <div className="clientList">{clientName}</div>
      <div className="clientList">{company}</div>
      <div className="clientList">{phone}</div>
      <div className="clientList clientEmail">{email}</div>
      <div className="clientList">{totalProjects}</div>
      <div className="clientList editIcon" >{act}</div>
    </div>
  )
}

ClientItem.defaultProps = {
 clientName: "Default Project Name",
  company: "Default Client Name",
  phone: "Default End Date",
  email: "Default email",
  totalProjects: "Default No of Projects",
  act: "Default Action"
};

export default ClientItem;