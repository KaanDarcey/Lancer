import React from 'react';
import './SchedulePage.scss';
import Calendar from '../../comps/Calendar';
import Counter from '../../comps/Counter';
import ItemSlider from '../../comps/ItemSlider';
import HeaderBar from '../../comps/HeaderBar';

function SchedulePage(){
    return(
        <div className='SchedulePage-container'>
            <HeaderBar headerTitle='Schedule' />
            <Calendar />
            <div className='SchedulePage-footer'>
                <ItemSlider caption='Projects' />
                <ItemSlider caption='Clients'/>
                <Counter title='Tasks Due' clr='red'/>
                <Counter title='Tasks Completed' clr='#32CD32'/>
            </div>
        </div>
    )
}

export default SchedulePage;