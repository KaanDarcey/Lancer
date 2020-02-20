import React from 'react';

import '../../src/App.scss';

import Menu from '../comps/Menu';
import ProjectList from '../comps/ProjectList';
import Header from '../comps/HeaderBar';
import Button from '../comps/Button';

import {FaSortAmountUp, FaEdit, FaSearch} from 'react-icons/fa'
import Search from '../comps/Search';

import Form from '../comps/Form';
import Timer from '../comps/Timer';
import {FaPlayCircle} from 'react-icons/fa';

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
 <div style={{display:"flex", flex:4, flexDirection:'column'}}>
    <Header
      headerTitle="Projects"
      iconTitle="Sort"
      icon={<FaSortAmountUp/>}
      btn={<Button
        title="Create Project"/>}
    />
    <div style={{display:"flex", flexDirection:"row", padding:"1em"}}>
      <Search
      icon={<FaSearch/>}
      />
    </div>
    <ProjectList />
  </div>
  </div>
}

var taskFormTitles = ["ClIENT NAME", "PROJECT NAME", "EMAIL", "PHONE", "ADDRESS", "START DATE", "END DATE"];

export const TaskPage = () => {
  return <div className="" style={{display:"flex", flexDirection:"row"}}>
  <Menu style={{display:"flex", flex:1}}/>
 <div style={{display:"flex", flex:4, flexDirection:'column'}}>
    <Header
      headerTitle="Project Name"
    />
    <div style={{display:"flex", flexDirection:"row", padding:"1em"}}>
      <Search
      icon={<FaSearch/>}
      />
    </div>
    <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{display:"flex", flexDirection:"column", padding:"3em", marginTop:'-50px'}}>
        <h2 style={{margin:'10px', marginLeft:'-10px'}}>Client Information</h2>
        <Form title={taskFormTitles} btnTitle='Save Changes'/>
      </div>
      <div style={{display:"flex", flexDirection:"column", padding:"3em", marginTop:'-50px'}}>
      <h2 style={{margin:'10px'}}>Project Task Name </h2>
      <h4 style={{margin:'10px'}}>Current Task</h4>
      <p style={{margin:'10px', color:'rgba(200,200,200,1)'}}>Prototyping in Figma</p>
        <Timer
            icon={<FaPlayCircle/>}
            hh="00"
            mm="01"
            ss="08"
        />
      </div>
    </div>
  </div>
  </div>
}