import React from 'react';
import List from '../comps/List';

import {FaEdit} from 'react-icons/fa'

var icon = <FaEdit/>;

var ListItems = [
  {
    listItem01:"Prototyping Figma",
    listItem02:"3 PM - 5 PM",
    listItem03:"1:08",
    listItem04:icon,
  },
  {
    listItem01:"Meeting with David",
    listItem02:"9:30 PM - 10:38 PM",
    listItem03:"1:08",
    listItem04:icon,
  }];

var TaskItems = [
  {
    listItem01:"Prototyping Figma",
    listItem02:"3 PM - 5 PM",
    listItem03:"1:08",
    listItem04:icon,
  },
  {
    listItem01:"Meeting with David",
    listItem02:"9:30 PM - 10:38 PM",
    listItem03:"1:08",
    listItem04:icon,
  },
  {
    listItem01:"User Testing",
    listItem02:"9:30 PM - 10:38 PM",
    listItem03:"1:08",
    listItem04:icon,
  }
];

var NotesItems = [
  {
    listItem01:"Prototyping Figma",
    listItem02:"3 PM - 5 PM",
  },
  {
    listItem01:"Meeting with David",
    listItem02:"9:30 PM - 10:38 PM",
  },
];

export default {
  title: 'List',
  component: List,
};

export const defaultList = () => {
  return <List 
  items={ListItems}/>
};

export const TaskList = () => {
  return <List
  listTitle="ALL TASKS"
  items={TaskItems}/>
};

export const NotesList = () => {
  return <List
  listTitle="View Notes"
  items={NotesItems}
  />
}