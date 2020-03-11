import React from 'react';
import './creditform.scss';
import Button from '../Button';
import Checkbox from '../Checkbox';

function CreditForm(){
    return(
        <form className='CreditForm-form'>
            <div className='CreditForm-row'>
                <input className='CreditForm-form-input' type='text' pattern='[a-zA-Z]' required='required' placeholder='Name On Card'/>
                <input className='CreditForm-form-input' type='text' pattern='[0-9]' required='required' placeholder="Card Number"/>
            </div>
            <div className='CreditForm-row'>
                <input className='CreditForm-form-input' type='text' pattern='[0-9]' required='required' placeholder=' MM/YY' />
                <input className='CreditForm-form-input' type='text' pattern='[0-9]' required='required' placeholder=' CVV/CVC' />
            </div>
            <div className='CreditForm-row'>
                <input className='CreditForm-form-input' type='text' pattern='[a-zA-Z]' required='required' placeholder='CANADA'/>
                <input className='CreditForm-form-input' type='text' pattern='[a-zA-Z0-9]' required='required' placeholder='ZIP'/>
            </div>
            <div className='CreditForm-terms'>
                <Checkbox />
                <p>I agree with our Terms and Conditions</p>
            </div>
            <Button title='Make Payment' />
        </form>
    )
}

export default CreditForm;