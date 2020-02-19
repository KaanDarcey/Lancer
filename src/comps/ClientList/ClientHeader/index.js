import React from 'react';
import './clientHeader.scss';

function ClientHeader({clientName,company,phone,email,totalProjects,act}){
  return(
    <div className="row clientHeaderCont">
      <div className="clientHeader">{clientName}</div>
      <div className="clientHeader">{company}</div>
      <div className="clientHeader">{phone}</div>
      <div className="clientHeader">{email}</div>
      <div className="clientHeader">{totalProjects}</div>
      <div className="clientHeader actHeader">{act}</div>
    </div>
  )
}

ClientHeader.defaultProps = {
  clientName: "Client Name",
  company: "Company",
  phone: "Phone",
  email:"Email",
  totalProjects:"Total Projects",
  act: "Edit"
};

export default ClientHeader;