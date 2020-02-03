import React from 'react';
import './button.scss';

function Button({title}){
    return(
        <div className='btn'>
            <p className='btnTitle' >{title}</p>
        </div>
    )
}

Button.defaultProps = {
    title:'default'
};

export default Button;