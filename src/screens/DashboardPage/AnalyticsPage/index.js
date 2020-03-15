import React from 'react';
import './AnalyticsPage.scss';
import Header from '../../../comps/HeaderBar';
import Tab from '../../../comps/Tab';
import ItemSlider from '../../../comps/ItemSlider';
import Counter from '../../../comps/Counter';
import WeekMonth from '../../../comps/WeekMonth';
import {FaCalendarAlt} from 'react-icons/fa';
import BarGraph from '../../../comps/Graphs/BarGraph';
import Button from '../../../comps/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

import PieChart from 'react-minimal-pie-chart';


function AnalyticsPage(){

    var projectItems = ['StarMedia','Eagleson','OW','BCIT','I.D.E.A', 'Amazon', 'Microsoft'],
        clientItems = ['Jason','Mike','Sarah','Kyle','Amanda', 'John', 'Victoria'];

    return( 
        <div className="AnalyticsPage-container">
            <Header
            headerTitle="Analytics"
            />
            <div className='AnalyticsPage-content'>
                <div className='AnalyticsPage-weekMonth'>
                <h2>Project Summary</h2>
                    <WeekMonth />
                </div>
                <div className='AnalyticsPage-section'>
                    <Tab title='Active' value='7' active='false'/>
                    <Tab title='Completed Tasks' value='16' active='true'/>
                    <Tab title='Finished Projects' value='23' active='false'/>
                </div>
                <div className='AnalyticsPage-section'>
                    <ItemSlider caption='Projects' title={projectItems}/>
                    <ItemSlider caption='Clients' title={clientItems}/>
                    <div className='AnalyticsPage-counter-section'>
                        <div className='AnalyticsPage-counter-header'>
                            <FaCalendarAlt size={20}/>
                            <h3>Weekly Deadlines</h3>
                        </div>
                        <div className='AnalyticsPage-counters'>
                            <Counter title='Deadlines Approaching' clr='red' value='2'/>
                            <Counter title='Completed Projects' clr='#32CD32' value='2'/>
                        </div>
                    </div>
                </div>
                <div className='AnalyticsPage-section'>
                    <div className='AnalyticsPage-bar'>
                        <h3>Analytics</h3>
                        <BarGraph />
                    </div>
                    <div className='AnalyticsPage-pie'>
                    <PieChart 
                        data={[
                            { title: 'One', value: 60, color: '#153243' },
                            { title: 'Two', value: 15, color: '#155590' },
                            { title: 'Three', value: 25, color: '#368edf' },
                        ]}
                    />
                    <div className='BarGraph-pie-hole'></div>
                    </div>
                </div>
                <div className='AnalyticsPage-section'>
                <NavLink to="/AdvancedAnalyticsPage">
                    <Button title='ADVANCED ANALYTICS'/>
                </NavLink>
                </div>
            </div>
        </div>
    )
  }

export default AnalyticsPage;