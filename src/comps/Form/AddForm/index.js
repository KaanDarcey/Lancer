import React from 'react';
import './AddForm.scss';
import Button from '../../Button';

function AddForm({title, btn}){
    return (
        <form className='AddForm-container'>
            <input className='AddForm-input' type='text' placeholder={title[0]}/>
            <input className='AddForm-input' type='text' placeholder={title[2]}/>
            <textarea className='AddForm-text' type='text' placeholder={title[1]}/>
            <Button title={btn} />
        </form>
    )
}

AddForm.defaultProps = {
    title:["Enter Name", "Enter Description","Due Date"],
    btn:'Add Task'
}

export default AddForm;