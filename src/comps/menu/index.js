import React from 'react';
import './menu.scss';
import MenuItem from './MenuItem';
import Button from '../Button';
import {FaCalendarAlt, FaChartBar, FaRegUserCircle, FaPowerOff, FaUsers, FaProjectDiagram} from 'react-icons/fa';

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
                <NavLink to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem icon={<FaChartBar />} title='Dashboard' /></NavLink>
                <NavLink to="/SchedulePage" activeClassName={active} style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem icon={<FaCalendarAlt />} title='Schedule' /></NavLink>
                <NavLink to="/ProjectPage" activeClassName={active} style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem icon={<FaProjectDiagram />} title='Projects' /></NavLink>
                <NavLink to="/ClientPage" activeClassName={active} style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem icon={<FaUsers />} title='Clients' /></NavLink>
                <NavLink to="/" ><MenuItem icon={<FaRegUserCircle style={{ color: 'inherit', textDecoration: 'inherit'}}/>} title='Account' /></NavLink>
            </nav>
            <div className='menu-bottom'>
                <Button title="Upgrade Now"/>
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