import React from 'react';
import './upgrade.scss';
import Button from '../Button';

function Upgrade({title, feat, price, time, popular}){

    var active = 'upgrade-popular',
        pop = null,
        topBlue = 'upgrade-content';

    if(popular == 'true'){
        active = 'upgrade-popular-active';
        pop = 'MOST POPULAR';
        topBlue = 'upgrade-content';
        
    } else {
        active = 'upgrade-popular';
        pop = null;
        topBlue = 'upgrade-content upgrade-content-unpopular';
    }

    return(
        <div className='upgrade-container'>
            <div className={active}>
                <h3 className='upgrade-popular-title'>{pop}</h3>
            </div>
            <div className={topBlue}>
                <h3 className='upgrade-title'>{title}</h3>
                <div className='upgrade-features'>
                    <ul className='upgrade-features-list'>
                        <li className='upgrade-features-item'>{feat[0]}</li>
                        <li className='upgrade-features-item'>{feat[1]}</li>
                        <li className='upgrade-features-item'>{feat[2]}</li>
                        <li className='upgrade-features-item'>{feat[3]}</li>
                    </ul>
                </div>
                <div className='upgrade-price'>
                    <h2 className='upgrade-price-value'>{price}</h2>
                    <h4 className='upgrade-price-time'>{time}</h4>
                </div>
                <Button title='REGISTER' />
            </div>
        </div>
    )
}

Upgrade.defaultProps = {
    title:'DEFAULT TITLE',
    feat:['- default feature', '- default feature', '- default feature', '- default feature'],
    price:'$0',
    time:'per month',
    popular:'true'
}

export default Upgrade;