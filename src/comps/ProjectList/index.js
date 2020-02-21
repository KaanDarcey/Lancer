import React from 'react';
import './projectList.scss';

import ProjectItem from './ProjectItem';
import ProjectHeader from './ProjectHeader';

import {FaEdit} from 'react-icons/fa';
import {MdMoreVert} from "react-icons/md";

var icon = <MdMoreVert/>;

function ProjectList({items, titles}){
  return(
      <div className="list">
        <div id="" className="">
          {titles.map((t,i)=>{
              return <ProjectHeader {...t}/>
          })}
        </div>    
        <div id="" className="">
          {items.map((o,i)=>{
              return <ProjectItem {...o}/>
          })}
        </div>
      </div>      
  )
}

ProjectList.defaultProps = {
  items:[
    {
     projectName: "Project 1",
      clientName: "Client 1",
      endDate: "January 01, 2020",
      status: "100%",
      act: icon
    },
    {
     projectName: "Project 2",
      clientName: "Client 2",
      endDate: "January 01, 2020",
      status: "80%",
      act: icon
    },
  ],
  titles:[
    {
     projectName: "Default Title",
      clientName: "Default Title",
      endDate: "Default Title",
      status: "Default Title",
      act:"Default Title"
    },
  ]

};

export default ProjectList;