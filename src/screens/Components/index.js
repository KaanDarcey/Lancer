import React from 'react';
import './components.scss';

import {MdMoreVert} from "react-icons/md";
import {FaPlayCircle, FaSortAmountUp} from 'react-icons/fa';

import HeaderBar from '../../comps/HeaderBar';
import Button from '../../comps/Button';
import AddForm from '../../comps/Form/AddForm';
import ProgressBar from '../../comps/ProgressBar';
import MenuItem from '../../comps/Menu/MenuItem';
import Menu from '../../comps/Menu';
import List from '../../comps/List';
import ProjectList from '../../comps/ProjectList';
import ClientList from '../../comps/ClientList';
import Timer from '../../comps/Timer';
import Search from '../../comps/Search';
import Divider from '../../comps/Divider';

var icon = <MdMoreVert/>;

var listItems=[
  {
    listItem01:"Group1",
    listItem02:"9AM-9:30AM",
  },
  {
    listItem01:"Group2",
    listItem02:"9:30AM-10AM",
  }
];

var ProjectItems = [
  {
   projectName: "Star Media - Web Prototypes",
    clientName: "David So",
    endDate: "May 26, 2019",
    status: "60%",
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
  }
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

function Components(){

  

    return (
        <div className='components'>
          <HeaderBar headerTitle='Components' />
          <div className='comps'>
            <h2>INPUTS</h2>
            <div className='comp-section'>
              <h3 className='comp-name'>Button</h3>
              <div className='comp'><Button title='Default Button'/></div>
              <div className='comp code'><code>{"<Button title='Default Button'/>"}</code></div>
            </div>
            <div className='comp-section'>
              <h3 className='comp-name'>Form</h3>
              <div className='comp'><AddForm/></div>
              <div className='comp code'>
                <code>{"<form className='AddForm-container'>\n <input className='AddForm-input' type='text' placeholder={title[0]}/>\n <input className='AddForm-input' type='text' placeholder={title[2]}/>\n <textarea className='AddForm-text' type='text' placeholder={title[1]}/>\n <Button title={btn} />\n</form>"}</code>
              </div>
            </div>
            <div className='comp-section'>
              <h3 className='comp-name'>Progress Bar</h3>
              <div className='comp'><ProgressBar status='88%'/></div>
              <div className='comp code'>
                <code>{"<ProgressBar status='88%'/>"}</code>
              </div>
            </div>
            <div className='comp-section'>
              <h3 className='comp-name'>Search Bar</h3>
              <div className='comp'><Search/></div>
              <div className='comp code'>
                <code>{"<Search/>"}</code>
              </div>
            </div>
          </div>

          <div className='comps'>
            <h2>NAVIGATION</h2>
            <div className='comp-section'>
              <h3 className='comp-name'>Menu</h3>
              <div className='comp code'><MenuItem title='Home'/><MenuItem title='Account'/></div>
              <div className='comp code'><code>{"<MenuItem title='Home'/>\n<MenuItem title='Account'/>"}</code></div>
            </div>
          </div>

          <div className='comps'>
            <h2>DATA DISPLAY</h2>
            <div className='comp-section'>
              <h3 className='comp-name'>List</h3>
              <div className='comp'><List items={listItems}/></div>
              <div className='comp code'><code>{"<List items={listItems}/>"}</code></div>
            </div>

            <div className='comp-section'>
              <h3 className='comp-name'>Project List</h3>
              <div className='comp'><ProjectList titles={ProjectTitles} items={ProjectItems}/></div>
              <div className='comp code'><code>{"<ProjectList titles={ProjectTitles} items={ProjectItems}/>"}</code></div>
            </div>

          </div>


          <div className='comps'>
            <h2>OTHER</h2>
            <div className='comp-section'>
              <h3 className='comp-name'>Timer</h3>
              <div className='comp'><Timer
                icon={<FaPlayCircle/>}
                hh="00"
                mm="01"
                ss="08"/>
              </div>
              <div className='comp code'><code>{"<Timer\n icon={<FaPlayCircle/>}\n hh='00'\n mm='01'\n ss='08'/>"}</code></div>
            </div>

          </div>

          
        </div>
    )
  }

  export default Components;