import React from 'react';
import './calendar.scss';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaPlusCircle} from 'react-icons/fa';
import Button from '../Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

function Calendar(){
    
    return(
        <div className='calendar-container'>
            <div className='calendar-header'>
                <div className='calendar-header-left'>
                    <h3 className='calendar-week'>Week</h3>
                </div>
                <div className='calendar-header-center'>
                    <FaArrowAltCircleLeft className='calendar-arrow' size={24}/>
                    <h2 className='calendar-month'>January</h2>
                    <FaArrowAltCircleRight className='calendar-arrow' size={24}/>
                </div>
                <div className='calendar-header-right'>
                    <NavLink to="/AddTaskPage" style={{textDecoration:'none'}}>
                        <Button title='Add Task' />
                    </NavLink>
                </div>
            </div>
            <div className='calendar-columns'>
                <div id='column1' className='calendar-col'>
                    <p className='calendar-date'>Jan 1</p>
                    <h3 className='calendar-day'> Monday</h3>
                    <NavLink to="/AddTaskPage">
                    <FaPlusCircle className='calendar-addBtn' size={20} />
                    </NavLink>
                </div>
                <div id='column2' className='calendar-col'>
                    <p className='calendar-date'>Jan 2</p>
                    <h3 className='calendar-day'>Tuesday</h3>
                    <NavLink to="/AddTaskPage">
                    <FaPlusCircle className='calendar-addBtn' size={20} />
                    </NavLink>
                </div>
                <div id='column3' className='calendar-col'>
                    <p className='calendar-date'>Jan 3</p>
                    <h3 className='calendar-day'>Wednesday</h3>
                    <NavLink to="/AddTaskPage">
                    <FaPlusCircle className='calendar-addBtn' size={20} />
                    </NavLink>
                </div>
                <div id='column4' className='calendar-col'>
                    <p className='calendar-date'>Jan 4</p>
                    <h3 className='calendar-day'>Thursday</h3>
                    <NavLink to="/AddTaskPage">
                    <FaPlusCircle className='calendar-addBtn' size={20} />
                    </NavLink>
                </div>
                <div id='column5' className='calendar-col'>
                    <p className='calendar-date'>Jan 5</p>
                    <h3 className='calendar-day'>Friday</h3>
                    <NavLink to="/AddTaskPage">
                    <FaPlusCircle className='calendar-addBtn' size={20} />
                    </NavLink>
                </div>
                <div id='column6' className='calendar-col'>
                    <p className='calendar-date'>Jan 6</p>
                    <h3 className='calendar-day'>Saturday</h3>
                    <NavLink to="/AddTaskPage">
                    <FaPlusCircle className='calendar-addBtn' size={20} />
                    </NavLink>
                </div>
                <div id='column7' className='calendar-col'>
                    <p className='calendar-date'>Jan 7</p>
                    <h3 className='calendar-day'>Sunday</h3>
                    <NavLink to="/AddTaskPage">
                    <FaPlusCircle className='calendar-addBtn' size={20} />
                    </NavLink>
                </div>
            </div>
        </div>
    )

}

export default Calendar;