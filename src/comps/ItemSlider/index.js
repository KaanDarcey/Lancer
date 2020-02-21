import React from 'react';
import './ItemSlider.scss';
import {FaCalendarAlt, FaChartBar, FaRegUserCircle, FaPowerOff, FaUsers, FaProjectDiagram} from 'react-icons/fa';

function ItemSlider({caption, title, icon}){
    return(
        <div className='itemSlider-container'>
            <div className='itemSlider-header'>
                {icon}
                <h3 className='itemSlider-caption'>{caption}</h3>
            </div>
            <div className='itemSlider-list-container'>
                <ul className='itemSlider-list'>
                    <li className='itemSlider-item'>{title[0]}</li>
                    <li className='itemSlider-item'>{title[1]}</li>
                    <li className='itemSlider-item'>{title[2]}</li>
                    <li className='itemSlider-item'>{title[3]}</li>
                    <li className='itemSlider-item'>{title[4]}</li>
                    <li className='itemSlider-item'>{title[5]}</li>
                    <li className='itemSlider-item'>{title[6]}</li>
                    <li className='itemSlider-item'>{title[4]}</li>
                    <li className='itemSlider-item'>{title[5]}</li>
                    <li className='itemSlider-item'>{title[6]}</li>
                </ul>
            </div>
        </div>
    )
}

ItemSlider.defaultProps = {
    title:['default', 'default', 'default', 'default', 'default', 'default', 'default','default', 'default'],
    caption:'Default',
    icon:<FaProjectDiagram size={20}/>
}

export default ItemSlider;