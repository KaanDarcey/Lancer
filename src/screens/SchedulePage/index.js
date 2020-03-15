import React from 'react';
import './SchedulePage.scss';
import Calendar from '../../comps/Calendar';
import Counter from '../../comps/Counter';
import ItemSlider from '../../comps/ItemSlider';
import HeaderBar from '../../comps/HeaderBar';
import {FaCalendarAlt} from 'react-icons/fa';

function SchedulePage(){
    return(
        <div className='SchedulePage-container'>
            <HeaderBar headerTitle='Schedule' />
            <Calendar />
            <div className='SchedulePage-footer'>
                <ItemSlider caption='Projects' />
                <ItemSlider caption='Clients'/>
                <div className='SchedulePage-counter-section'>
                    <div className='SchedulePage-counter-header'>
                        <FaCalendarAlt size={20}/>
                        <h3>Weekly Deadlines</h3>
                    </div>
                    <div className='SchedulePage-counters'>
                        <Counter title='Tasks Due' clr='red'/>
                        <Counter title='Tasks Completed' clr='#32CD32'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulePage;