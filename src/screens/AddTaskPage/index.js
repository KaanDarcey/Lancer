import React from 'react';
import './AddTaskPage.scss';
import Header from '../../comps/HeaderBar';
import ItemSlider from '../../comps/ItemSlider';
import Timer from '../../comps/Timer';
import AddForm from '../../comps/Form/AddForm';
import List from '../../comps/List';

import {FaPlayCircle} from 'react-icons/fa';

function AddTaskPage(){

    var taskFormTitles = ["Client Name", "Project Name", "Email", "Phone", "Address", "Start Date", "End Date"];

    return( 
        <div className="AddTaskPage-container">
            <Header
            headerTitle="Add Task"
            />
            <div className='AddTaskPage-content'>
                <div className='AddTaskPage-form'>
                    <h2 className='AddTaskPage-form-title'>Pick Your Project</h2>
                    <ItemSlider icon='' caption='' className='AddTaskPage-slider'/>

                    <h2 className='AddTaskPage-current-title' style={{marginTop:'180px'}}>Add Task</h2>
                    <AddForm />
                </div>
                <div className='AddTaskPage-current'>
                    <div className='AddTaskPage-timer'>
                        <h2 className='AddTaskPage-current-title'>Current Task </h2>
                        {/* <h4 className='TaskPage-current-title'>Current Task</h4> */}
                        <p className='AddTaskPage-current-title TaskPage-current-grey'>Selected Task Name</p>
                        <p className='AddTaskPage-current-title'>Descirption of selected task </p>
                        <p className='AddTaskPage-current-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='AddTaskPage-taskList'>
                    <h2 className='AddTaskPage-current-title'>All Tasks </h2>
                        <List />
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default AddTaskPage;