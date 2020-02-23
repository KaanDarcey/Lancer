import React from 'react';
import './ProjectPage.scss';

import ProjectList from '../../comps/ProjectList';
import Header from '../../comps/HeaderBar';
import Button from '../../comps/Button';
import {FaSortAmountUp, FaSearch} from 'react-icons/fa'
import Search from '../../comps/Search';

import PopUp from '../../comps/PopUp';
import {MdMoreVert} from "react-icons/md";

var icon = <MdMoreVert/>;
var ProjectItems = [
  {
   projectName: "Star Media - Web Prototypes",
    clientName: "David So",
    endDate: "May 26, 2019",
    status: "30%",
    act: icon,
    completed: false
  },
  {
   projectName: "Scope Media - Motion Graphics",
    clientName: "Paul Tan",
    endDate: "June 05, 2020",
    status: "40%",
    act: icon,
    completed: true
  },
  {
    projectName: "OW - WordPress Website",
     clientName: "Mike Change",
     endDate: "May 26, 2019",
     status: "60%",
     act: icon,
     completed: false
   },
   {
    projectName: "BCIT - Maintain Website",
     clientName: "Kevin Mavas",
     endDate: "June 05, 2020",
     status: "90%",
     act: icon,
     completed: true
   },
   {
    projectName: "JAPASO - Graphic Design",
     clientName: "Jake Paul",
     endDate: "May 26, 2019",
     status: "80%",
     act: icon,
     completed: false
   },
   {
    projectName: "Happihour - Web",
     clientName: "Mike Change ",
     endDate: "June 05, 2020",
     status: "75%",
     act: icon,
     completed: true
   },
];

var ProjectTitles = [
  {
   projectName: "Project Name",
    clientName: "Client Name",
    endDate: "Due Date",
    status: "Progress",
    act: "Completed",
  },
];

function ProjectPage(){
    return (
        <div className='ProjectPage-container'>
            <Header
                headerTitle="Projects"
                iconTitle="Sort"
                icon={<FaSortAmountUp/>}
                btn={<Button
                title="Create Project"
                />}
            />
            <div className='ProjectPage-search'>
                <Search
                icon={<FaSearch/>}
                />
            </div>
            <ProjectList
            titles={ProjectTitles}
            items={ProjectItems}
            />
        </div>
    )
  }

  export default ProjectPage;