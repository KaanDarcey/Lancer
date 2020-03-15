import React from 'react';
import './WeekMonth.scss';

function WeekMonth({active}){

    var state1 = 'WeekMonth-unactive',
        state2 = 'WeekMonth-unactive';

    if(active === 'true'){
        state1 = 'WeekMonth-active';
        state2 = 'WeekMonth-unactive';
    } else {
        state1 = 'WeekMonth-unactive';
        state2 = 'WeekMonth-active';
    }

    return(
        <div className='WeekMonth-container'>
            <h4 className={state1}>Week</h4>
            <h4>|</h4>
            <h4 className={state2}>Month</h4>
        </div>
    )
}

WeekMonth.defaultProps = {
    active: 'true'
}

export default WeekMonth;