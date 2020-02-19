import React from 'react';
import './clientList.scss';

import ClientHeader from './ClientHeader';
import ClientItem from './ClientItem';

import {FaEdit} from 'react-icons/fa'

function ClientList({items, titles}){
  return(
      <div className="clientList">
        <div id="" className="">
          {titles.map((t,i)=>{
              return <ClientHeader {...t}/>
          })}
        </div>    
        <div id="" className="">
          {items.map((o,i)=>{
              return <ClientItem {...o}/>
          })}
        </div>
      </div>      
  )
}

ClientList.defaultProps = {
  items:[
    {
      clientName: "Client Name",
      company: "Company",
      phone: "Phone",
      email:"Email",
      totalProjects:"Total Projects",
      act: <FaEdit/>
    },
    {
      clientName: "Client Name",
      company: "Company",
      phone: "Phone",
      email:"Email",
      totalProjects:"Total Projects",
      act: <FaEdit/> 
    },
  ],
  titles:[
    {
      clientName: "Client Name",
      company: "Company",
      phone: "Phone",
      email:"Email",
      totalProjects:"Total Projects",
      act: "Edit"
    },
  ]

};

export default ClientList;