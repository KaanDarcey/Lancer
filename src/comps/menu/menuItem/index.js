import React from 'react';
import './menuItem.scss';

function MenuItem({icon,title, highlight}, setCurrentPage={setCurrentPage}){

    var currentP = 'menu-item';

    if(highlight === title){
        currentP = 'menu-item highlight';
    }

    return(
        <div className={currentP} onClick={()=>{setCurrentPage({title})}}>
            <i className='itemIcon'>{icon}</i>
            <p className='title'>{title}</p>
        </div>
    )
}

MenuItem.defaultProps = {
    icon:'',
    title:'default title',
    hightlight:'Dashboard'
}

export default MenuItem;