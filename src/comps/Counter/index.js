import React from 'react';
import './counter.scss';

function Counter({value, title, clr}){
    return(
        <div className='counter-container'>
            <h3 className='counter-title'>{title}</h3>
            <h2 className='counter-value' style={{color:clr}}>{value}</h2>
        </div>
    )
}

Counter.defaultProps = {
    title:'default',
    value:0,
    clr:'#284b63'
}

export default Counter;