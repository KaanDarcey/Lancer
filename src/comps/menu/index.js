import React from 'react';
import './menu.scss';
import MenuItem from './MenuItem';
import Button from '../Button';
import {FaHome,FaCalendarAlt, FaChartBar, FaRegClock, FaRegUserCircle, FaWallet, FaPowerOff, FaUsers, FaProjectDiagram} from 'react-icons/fa';

function Menu({logo}){
    return(
        <div className='menu-container'>
            <img className='logo' src={logo} alt='logo'/>
                        <MenuItem icon={<FaChartBar />} title='Dashboard' />
                        <MenuItem icon={<FaCalendarAlt />} title='Schedule'/>
                        <MenuItem icon={<FaProjectDiagram />} title='Projects'/>
                        <MenuItem icon={<FaUsers />} title='Clients'/>
                        <MenuItem icon={<FaRegClock />} title='Timer'/>
                        <MenuItem icon={<FaRegUserCircle />} title='Account'/>
                        <MenuItem icon={<FaChartBar />} title='Billing'/>
                        <Button title="Upgrade Now"/>
                        <MenuItem icon={<FaPowerOff />} title='Log Out'/>
        </div>
    )
}

Menu.defaultProps = {
    logo:''
}

export default Menu;