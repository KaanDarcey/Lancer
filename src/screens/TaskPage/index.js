import React from 'react';
import './TaskPage.scss';

import Header from '../../comps/HeaderBar';
import Form from '../../comps/Form';
import Timer from '../../comps/Timer';
import AddForm from '../../comps/Form/AddForm';
import List from '../../comps/List';

import {FaPlayCircle, FaEdit} from 'react-icons/fa';
import ListItem from '../../comps/List/ListItem';

var icon = <FaEdit/>;

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


function TaskPage(){

    var taskFormTitles = ["Client Name", "Project Name", "Email", "Phone", "Address", "Start Date", "End Date"];

    return( 
        <div className="TaskPage-container">
            <Header
            headerTitle="Project Name"
            />
            <div className='TaskPage-content'>
                <div className='TaskPage-form'>
                    <h2 className='TaskPage-form-title'>Client Information</h2>
                    <Form title={taskFormTitles} btnTitle='Save Changes'/>

                    <h2 className='TaskPage-current-title'>Add Task</h2>
                    <AddForm />
                </div>
                <div className='TaskPage-current'>
                    <div className='TaskPage-timer'>
                        <h2 className='TaskPage-current-title'>Current Task </h2>
                        {/* <h4 className='TaskPage-current-title'>Current Task</h4> */}
                        <p className='TaskPage-current-title TaskPage-current-grey'>Selected Task Name</p>
                        <p className='TaskPage-current-title'>Descirption of selected task </p>
                        <p className='TaskPage-current-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Timer
                        icon={<FaPlayCircle/>}
                        hh="00"
                        mm="01"
                        ss="08"
                        />
                    </div>
                    <div className='TaskPage-taskList'>
                        <List listTitle="ALL TASKS" items={TaskItems}/>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default TaskPage;