import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../utils/validationSchema';

function MyLogin() {
  //
  const onSubmit = (values, actions) => {
    console.log(values, actions);
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        // validationSchema={validationSchema}
        // validateOnMount
        initialValues={{
          email: '',
          senha: '',
        }}
      >
        {() => (
          <Form>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <Field id="email" name="email" type="email" className="input" />
            <ErrorMessage
              name="questionaryNumber"
              component={(e) => <h1>{e}</h1>}
            />
            <br />
            <br />
            <label htmlFor="senha">Senha</label>
            <br />
            <Field id="senha" name="senha" type="password" className="input" />
            <ErrorMessage
              name="questionaryNumber"
              component={() => <h1></h1>}
            />
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
