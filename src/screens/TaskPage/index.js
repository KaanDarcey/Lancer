import React from 'react';
import './TaskPage.scss';

import Header from '../../comps/HeaderBar';
import Search from '../../comps/Search';
import Form from '../../comps/Form';
import Timer from '../../comps/Timer';
import AddForm from '../../comps/Form/AddForm';
import ProjectItem from '../../comps/ProjectList/ProjectItem';
import ProjectHeader from '../../comps/ProjectList/ProjectHeader';

import {FaPlayCircle} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa'

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
                        <p className='TaskPage-current-title TaskPage-current-grey'>Prototyping in Figma</p>
                        <Timer
                        icon={<FaPlayCircle/>}
                        hh="00"
                        mm="01"
                        ss="08"
                        />
                    </div>
                    <div className='TaskPage-taskList'>
                    <h2 className='TaskPage-current-title'>All Tasks </h2>
                        <ProjectHeader/>
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                        <ProjectItem />
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default TaskPage;