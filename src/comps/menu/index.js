import React from 'react';
import './menu.scss';
import MenuItem from './MenuItem';
import Button from '../Button';
import {FaCalendarAlt, FaChartBar, FaRegUserCircle, FaPowerOff, FaUsers, FaProjectDiagram, FaReact} from 'react-icons/fa';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function Menu({logo, active}, setCurrentPage={setCurrentPage}){
  var active = 'highlight';
    return(
        <div className='menu-container'>
            <div className='menu-top'>
                <img className='logo' src={require('../../imgs/LancerLogo.png')} alt='logo'/>
                <h3 className='menu-logo-title'>LANCER</h3>
            </div>
            <nav className='menu-center' >
                <NavLink to="/DashboardPage" className='menu-item' activeClassName={active}><MenuItem icon={<FaChartBar />} title='Dashboard' /></NavLink>
                <NavLink to="/SchedulePage" className='menu-item' activeClassName={active} ><MenuItem icon={<FaCalendarAlt />} title='Schedule' /></NavLink>
                <NavLink to="/ProjectPage" className='menu-item' activeClassName={active} ><MenuItem icon={<FaProjectDiagram />} title='Projects' /></NavLink>
                <NavLink to="/ClientPage" className='menu-item' activeClassName={active} ><MenuItem icon={<FaUsers />} title='Clients' /></NavLink>
                <NavLink to="/" className='menu-item' ><MenuItem icon={<FaRegUserCircle />} title='Account' /></NavLink>
                {/* <NavLink to="/Components" className='menu-item'  activeClassName={active}><MenuItem icon={<FaReact />} title='Components' /></NavLink> */}
            </nav>
            <div className='menu-bottom'>
            <NavLink to="/UpgradePage">
                <Button title="Upgrade Now"/>
            </NavLink>
                <MenuItem icon={<FaPowerOff />} title='Log Out' highlight={active}/>
            </div>


        </div>
    )
}

Menu.defaultProps = {
    logo:'../../imgs/LancerLogo.png',
    active: ''
}

export default Menu;