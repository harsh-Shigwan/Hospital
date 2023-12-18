import React from 'react'
import { Formik, Form , Field } from "formik";
const Doctor1 = () => {
  return (
    <div><Formik initialValues={{name:"",name1:"",num:""}} onSubmit={(value)=>{
        console.log(value);
    }}><Form>
    <label>name</label>
    <Field name="name" type="text"></Field>
    <br/><br/>
    <label>name1</label>
    <Field name="name1" type="text"></Field>
    <br/><br/>
    <label>no</label>
    <Field name="num" type="number"></Field>
    <br/><br/>
    <button type='submit'>submit</button>
    </Form></Formik></div>
  )
}

export default Doctor1