import React from 'react';
import './popUp.scss';
import {FaWindowClose} from 'react-icons/fa';
import Form from '../Form';

function PopUp({title, info, disp}){
    return(
        <div className='popUp-shadow'>
            <div className='popUp-border'>
                <div className='popUp-container'>
                <FaWindowClose className='popUp-close' size={25}/>
                <h2 className='popUp-title'>{title}</h2>
                {disp}
                </div>
            </div>
        </div>
    )
}

PopUp.defaultProps = {
    title:'DEFAULT',
    disp:<Form />
};

export default PopUp;