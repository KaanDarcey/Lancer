import React from 'react';
import './ClientOverviewPage.scss';

import Header from '../../comps/HeaderBar';
import Form from '../../comps/Form';
import Timer from '../../comps/Timer';
import AddForm from '../../comps/Form/AddForm';
import List from '../../comps/List';

import {FaPlayCircle} from 'react-icons/fa';
import ItemSlider from '../../comps/ItemSlider';

function ClientOverviewPage(){

    var taskFormTitles = ["Client Name", "Project Name", "Email", "Phone", "Address", "Start Date", "End Date"];

    return( 
        <div className="ClientOVP-container">
            <Header
            headerTitle="Client Name"
            />
            <div className='ClientOVP-content'>
                <div className='ClientOVP-form'>
                    <h2 className='ClientOVP-form-title'>Client Information</h2>
                    <Form title={taskFormTitles} btnTitle='Save Changes'/>

                    <h2 className='ClientOVP-current-title'>Add Note</h2>
                    <AddForm />
                </div>
                <div className='ClientOVP-current'>
                    <div className='ClientOVP-timer'>
                        <h2 className='ClientOVP-current-title '>Current Note </h2>
                        {/* <h4 className='TaskPage-current-title'>Current Task</h4> */}
                        <p className='ClientOVP-current-title TaskPage-current-grey'>Selected Note Name</p>
                        <p className='ClientOVP-current-title'>Descirption of selected note </p>
                        <p className='ClientOVP-current-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className='ClientOVP-taskList'>
                    <h2 className='ClientOVP-current-title'>All Notes </h2>
                        <List />
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default ClientOverviewPage;