import { Formik, Form } from "formik";
import { signUpSchema } from "../../validation/SignupValidation";
import { TextField } from "../util/TextField";

import "../../styles/form/form.css";


export function SignUp() {


  return (
    <div className="form-container">
      <Formik
       initialValues={{
         name: '',
         email: ''
       }}
       validationSchema={signUpSchema}
       onSubmit={values => {
        console.log(values)
       }}
      >
        {(formik) => (
            <>
            <h2>Keep up to date on the tomato</h2>
            <p>
              Enter your name and email address below to receive weekly updates
              on the status of the tomato
            </p>
            <Form>
              <TextField label="Name:" name="name" type="text"/>
              <TextField label="Email:" name="email" type="email"/>
              <button type="submit">Submit</button>
            </Form>
            </>
        )}
      </Formik>
    </div>
  );
}
