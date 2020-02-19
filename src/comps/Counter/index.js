import React from 'react';
import './counter.scss';

function Counter({value, title}){
    return(
        <div className='counter-container'>
            <h3 className='counter-title'>{title}</h3>
            <h2 className='counter-value'>{value}</h2>
        </div>
    )
}

Counter.defaultProps = {
    title:'default',
    value:0
}

export default Counter;