import React from 'react';
import './DashboardPage.scss';
import Header from '../../comps/HeaderBar';
import Tab from '../../comps/Tab';
import ItemSlider from '../../comps/ItemSlider';
import Counter from '../../comps/Counter';
import WeekMonth from '../../comps/WeekMonth';
import {FaCalendarAlt} from 'react-icons/fa';
import BarGraph from '../../comps/Graphs/BarGraph';
import Button from '../../comps/Button';

import PieChart from 'react-minimal-pie-chart';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


function DashboardPage(){

    var projectItems = ['StarMedia','Eagleson','OW','BCIT','I.D.E.A', 'Amazon', 'Microsoft'],
        clientItems = ['Jason','Mike','Sarah','Kyle','Amanda', 'John', 'Victoria'];

    return( 
        <div className="DashboardPage-container">
            <Header
            headerTitle="Dashboard"
            />
            <div className='DashboardPage-content'>
                <div className='DashboardPage-weekMonth'>
                <h2>Project Summary</h2>
                    <WeekMonth />
                </div>
                <div className='DashboardPage-section'>
                    <Tab title='Active' value='7' active='false'/>
                    <Tab title='Completed Tasks' value='16' active='true'/>
                    <Tab title='Finished Projects' value='23' active='false'/>
                </div>
                <div className='DashboardPage-section'>
                    <ItemSlider caption='Projects' title={projectItems}/>
                    <ItemSlider caption='Clients' title={clientItems}/>
                    <div className='DashboardPage-counter-section'>
                        <div className='DashboardPage-counter-header'>
                            <FaCalendarAlt size={20}/>
                            <h3>Weekly Deadlines</h3>
                        </div>
                        <div className='DashboardPage-counters'>
                            <Counter title='Deadlines Approaching' clr='red' value='2'/>
                            <Counter title='Completed Projects' clr='#32CD32' value='2'/>
                        </div>
                    </div>
                </div>
                <div className='DashboardPage-filter'>
                    <div className='DashboardPage-section DashboardPage-section-blur'>
                        <div className='DashboardPage-bar'>
                            <h3>Analytics</h3>
                            <BarGraph />
                        </div>
                        <div className='DashboardPage-pie'>
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
                    <div className='DashboardPage-section DashboardPage-section-btn'>
                    <NavLink to="/AnalyticsPage">
                        <Button title='VIEW ANALYTICS'/>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default DashboardPage;