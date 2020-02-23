import React from 'react';
import './button.scss';

function Button({title, act}){
    return(
        <div className='btn' onClick={act}>
            <p className='btnTitle' >{title}</p>
        </div>
    )
}

Button.defaultProps = {
    title:'default',
    act:''
};

export default Button;