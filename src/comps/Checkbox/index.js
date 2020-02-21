import React from 'react';
import './checkbox.scss';

function Checkbox({}){
    return(
        <div className='checkboxCont'>
            <input type="checkbox" className="checkbox"></input>
        </div>
    )
}

Checkbox.defaultProps = {
};

export default Checkbox;