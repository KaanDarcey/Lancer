import React from 'react';
import './menu.scss';
import MenuItem from './MenuItem';
import Button from '../Button';
import {FaCalendarAlt, FaChartBar, FaRegUserCircle, FaPowerOff, FaUsers, FaProjectDiagram} from 'react-icons/fa';

function Menu({logo, active}, setCurrentPage={setCurrentPage}){
    return(
        <div className='menu-container'>
            <div className='menu-top'>
                <img className='logo' src={require('../../imgs/LancerLogo.png')} alt='logo'/>
                <h3 className='menu-logo-title'>LANCER</h3>
            </div>
            <div className='menu-center'>
                <MenuItem icon={<FaChartBar />} title='Dashboard' highlight={active} setCurrentPage={setCurrentPage}/>
                <MenuItem icon={<FaCalendarAlt />} title='Schedule' highlight={active} setCurrentPage={setCurrentPage}/>
                <MenuItem icon={<FaProjectDiagram />} title='Projects' highlight={active} setCurrentPage={setCurrentPage}/>
                <MenuItem icon={<FaUsers />} title='Clients' highlight={active} setCurrentPage={setCurrentPage}/>
                <MenuItem icon={<FaRegUserCircle />} title='Account' highlight={active} setCurrentPage={setCurrentPage}/>
            </div>
            <div className='menu-bottom'>
                <Button title="Upgrade Now"/>
                <MenuItem icon={<FaPowerOff />} title='Log Out' highlight={active}/>
            </div>
        </div>
    )
}

Menu.defaultProps = {
    logo:'../../imgs/LancerLogo.png',
    active: 'Dashboard'
}

export default Menu;