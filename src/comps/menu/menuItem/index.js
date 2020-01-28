import React from 'react';
import './menuItem.scss';

function MenuItem({icon,title}){
    return(
        <div className='menu'>
            {icon}
            <p className='title'>{title}</p>
        </div>
    )
}

MenuItem.defaultProps = {
    icon:'',
    title:'default title'
}

export default MenuItem;