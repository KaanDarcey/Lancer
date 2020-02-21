import React from 'react';
import './form.scss';
import Button from '../Button';

function Form({caption, title, descr, btnTitle}){
    return(
        <form className='form-container'>
            {/* <h2 className='form-header'>{caption}</h2> */}
            <div className='form-row'>
                <h3 className='form-title'>{title[0]}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title[1]}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title[2]}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title[3]}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title[4]}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title[5]}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            <div className='form-row'>
                <h3 className='form-title'>{title[6]}</h3>
                <input className='form-descr' type='text' placeholder={descr} value={descr}/>
            </div>
            {/* <div className='form-row'>
                <h3 className='form-title'>{title}</h3>
                <div className='form-progressBar'>
                    <div className='form-progress'></div>
                </div>
            </div> */}
            <Button title={btnTitle}/>
        </form>
    )
}

Form.defaultProps = {
    caption:'Default',
    title: ["default","default","default","default","default","default","default",],
    descr:'default',
    btnTitle:'default'
};

export default Form;