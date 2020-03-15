import React from 'react';
import './clientImage.scss';

function ClientImage({imgUrl}){
    return(
        <div className='ClientImage'>
          <img src={imgUrl} alt="Client Image"/>
        </div>
    )
}

ClientImage.defaultProps = {
    imgUrl:"imgs/clientAvatar.jpg"
};

export default ClientImage;