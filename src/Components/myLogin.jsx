import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../utils/validationSchema';
import Errors from './errors';

//  ! https://formik.org/docs/examples/with-material-ui

function MyLogin() {
  //
  const onSubmit = (values, actions) => {
    console.log(values, actions);
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnMount
        initialValues={{
          email: '',
          senha: '',
        }}
      >
        {({ errors }) => (
          <Form>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <Field id="email" name="email" type="email" className="input" />
            {errors.email && <Errors>{errors.email}</Errors>}
            <br />
            <br />
            <label htmlFor="senha">Senha</label>
            <br />
            <Field id="senha" name="senha" type="password" className="input" />
            {errors.senha && <Errors>{errors.senha}</Errors>}
            <br />
            <br />
            <button type="submit">enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MyLogin;
