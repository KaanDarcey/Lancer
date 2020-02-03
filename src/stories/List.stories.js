import React from 'react';

import '../../src/App.scss';

import List from '../comps/List';
import Header from '../comps/HeaderBar';
import Button from '../comps/Button';

import {FaSortAmountUp} from 'react-icons/fa'

export default {
  title: 'List',
  component: List,
};

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

export const DefaultList = () => {
  return <List/>
}

export const ProjectList = () => {
  return <div>
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
}