import React from 'react';
import Form from '../comps/Form';
import AddForm from '../comps/Form/AddForm';

export default {
    title: 'Form',
    component: Form,
  };

  export const defaultForm = () => {
    return <Form />
  };

  export const defaultAddForm = () => {
    return <AddForm />
  };