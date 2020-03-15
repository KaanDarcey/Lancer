import React from 'react';
import './AdvancedAnalyticsPage.scss';
import Header from '../../../comps/HeaderBar';
import Tab from '../../../comps/Tab';
import ItemSlider from '../../../comps/ItemSlider';
import Counter from '../../../comps/Counter';
import WeekMonth from '../../../comps/WeekMonth';
import {FaCalendarAlt} from 'react-icons/fa';
import BarGraph from '../../../comps/Graphs/BarGraph';
import Button from '../../../comps/Button';

import PieChart from 'react-minimal-pie-chart';


function AdvancedAnalyticsPage(){

    var projectItems = ['StarMedia','Eagleson','OW','BCIT','I.D.E.A', 'Amazon', 'Microsoft'],
        clientItems = ['Jason','Mike','Sarah','Kyle','Amanda', 'John', 'Victoria'];

    return( 
        <div className="AdvancedAnalyticsPage-container">
            <Header
            headerTitle="Advanced Analytics"
            />
            <div className='AdvancedAnalyticsPage-content'>
                <div className='AdvancedAnalyticsPage-section'>
                    <BarGraph />
                    <div className='AdvancedAnalyticsPage-pie'>
                    <PieChart 
                        data={[
                            { title: 'One', value: 60, color: '#153243' },
                            { title: 'Two', value: 15, color: '#155590' },
                            { title: 'Three', value: 25, color: '#368edf' },
                        ]}
                    />
                    <div className='BarGraph-pie-hole2'></div>
                    </div>
                </div>
                <div className='AdvancedAnalyticsPage-section'>
                    <ItemSlider caption='Projects' title={projectItems}/>
                    <ItemSlider caption='Clients' title={clientItems}/>
                    <div className='AdvancedAnalyticsPage-counter-section'>
                        <div className='AdvancedAnalyticsPage-counter-header'>
                            <FaCalendarAlt size={20}/>
                            <h3>Weekly Deadlines</h3>
                        </div>
                        <div className='AdvancedAnalyticsPage-counters'>
                            <Counter title='Deadlines Approaching' clr='red' value='2'/>
                            <Counter title='Completed Projects' clr='#32CD32' value='2'/>
                        </div>
                    </div>
                </div>
                <div className='AdvancedAnalyticsPage-section AdvancedAnalyticsPage-section-counters'>
                    <Counter title='DProjects' value='2'/>
                    <Counter title='Time Tracker' value='122'/>
                    <Counter title='Weekly Tasks' value='32'/>
                    <Counter title='Monthly Tasks' value='51'/>
                </div>
                <div className='AdvancedAnalyticsPage-section'>
                    <div className='AdvancedAnalyticsPage-bar'>
                        <h3>Analytics</h3>
                        <BarGraph />
                    </div>
                    <div className='AdvancedAnalyticsPage-pie'>
                        <PieChart 
                            data={[
                                { title: 'One', value: 60, color: '#153243' },
                                { title: 'Two', value: 15, color: 'red' },
                                { title: 'Three', value: 25, color: '#368edf' },
                            ]}
                        />
                        <div className='BarGraph-pie-hole'><h4>60%</h4></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default AdvancedAnalyticsPage;