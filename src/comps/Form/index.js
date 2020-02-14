import React from 'react';
import './form.scss';
import Button from '../Button';

function Form({caption, title, descr}){
    return(
        <form className='form-container'>
            {/* <h2 className='form-header'>{caption}</h2> */}
            <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            {/* <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <div className='form-progressBar'>
                    <div className='form-progress'></div>
                </div>
            </div> */}
            <Button title='Add'/>
        </form>
    )
}

Form.defaultProps = {
    caption:'Default',
    title:'default',
    descr:'default'
};

export default Form;