import React from 'react';
import './tab.scss';

function Tab({title, value, active}){

    var highlight = 'tab-container';

    if(active==='true'){
        highlight = 'tab-container tab-active'
    } else {
        highlight = 'tab-container';
    }

    return(
        <div className={highlight}>
            <h3 className='tab-title'>{title}</h3>
            <p className='tab-value'>{value}</p>
        </div>
    )
}

Tab.defaultProps = {
    title:'default',
    value:'0',
    active:'false'
}

export default Tab;