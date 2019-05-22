import React from 'react';
import FormContext from './api-context';
import FormInfo from './FormInfo';

const FormContainer = () => (
  <FormContext.Consumer>
    {(context) => {
      return (
        <FormInfo />
      )
    }}
  </FormContext.Consumer>
)

export default FormContainer;