import React from "react";
import {reduxForm, Field} from "redux-form";
import {submit} from 'redux-form';
import Input from "./Input";
import Select from "./Select";

function ProductForm({handleSubmit, disabled}) {

  return <form
    onSubmit={handleSubmit}>
    <Field name="name" component={Input} type="text" label="Name:" disabled={disabled}/>
    <Field name="price" component={Input} type="number" label="Price: " disabled={disabled}
           parse={value => parseInt(value)}
    />
    <Field name="origin" component={Select} label="Origin: " disabled={disabled}/>
  </form>
}


export default reduxForm({
  form: 'productForm',
  onSubmit: submit
})(ProductForm)