import React from 'react';
import List from '../comps/List';
import Header from '../comps/HeaderBar';
import Button from '../comps/Button';
import Menu from '../comps/Menu';

import {FaSortAmountUp} from 'react-icons/fa'

export default {
  title: 'Pages',
}

var ProjectItems = [
  {
    projectName: "Star Media - Web Prototypes",
    clientName: "David So",
    endDate: "May 26, 2019",
    status: "60%",
  },
  {
    projectName: "Scope Media - Motion Graphics",
    clientName: "Paul Tan",
    endDate: "June 05, 2020",
    status: "40%",    
  }
];

var ProjectTitles = [
  {
    projectName: "Project Name",
    clientName: "Client Name",
    endDate: "End Date",
    status: "Progress",
  },
];

export const ProjectList = () => {
  return <div className="" style={{display:"flex", flexDirection:"row"}}>
    <Menu style={{display:"flex", flex:1}}/>
   <div style={{display:"flex", flex:4, flexDirection:'column'}}>
   <Header
      headerTitle="Projects"
      iconTitle="Sort"
      icon={<FaSortAmountUp/>}
      btn={<Button
        title="Create Project"/>}
    />
    <List
      titles ={ProjectTitles}
      items={ProjectItems}/>
   </div>
  </div>
}