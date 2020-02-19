import React from 'react';

import '../../src/App.scss';

import Menu from '../comps/Menu';
import ProjectList from '../comps/ProjectList';
import Header from '../comps/HeaderBar';
import Button from '../comps/Button';

import {FaSortAmountUp, FaEdit, FaSearch} from 'react-icons/fa'
import Search from '../comps/Search';

var icon = <FaEdit/>;

export default {
  title: 'ProjectList',
  component: ProjectList,
};

var ProjectItems = [
  {
   projectName: "Star Media - Web Prototypes",
    clientName: "David So",
    endDate: "May 26, 2019",
    status: "60%",
    act: icon,
  },
  {
   projectName: "Scope Media - Motion Graphics",
    clientName: "Paul Tan",
    endDate: "June 05, 2020",
    status: "40%",
    act: icon,    
  }
];

var ProjectTitles = [
  {
   projectName: "Project Name",
    clientName: "Client Name",
    endDate: "End Date",
    status: "Progress",
    act: "Edit",
  },
];

export const DefaultList = () => {
  return <ProjectList/>
}

export const ProjectListPage = () => {
  return <div className="" style={{display:"flex", flexDirection:"row"}}>
  <Menu style={{display:"flex", flex:1}}/>
 <div style={{display:"flex", flex:2, flexDirection:'column'}}>
    <Header
      headerTitle="Projects"
      iconTitle="Sort"
      icon={<FaSortAmountUp/>}
      btn={<Button
        title="Create Project"/>}
    />
    <div style={{display:"flex", flexDirection:"row", padding:"1em"}}>
      <div style={{display:"flex", flexDirection:"row", flex:2}}>
        <Button title="Current"/>
        <Button title="Completed"/>
      </div>
      <Search
      icon={<FaSearch/>}
      />
    </div>
    <ProjectList
      titles ={ProjectTitles}
      items={ProjectItems}/>
  </div>
  </div>
}