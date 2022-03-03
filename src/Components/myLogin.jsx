import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../utils/validationSchema';
import Errors from './errors';

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
            {errors.email && <Errors>{errors.email} - sem ErrorMessage</Errors>}
            <ErrorMessage name="email" component={Errors} />
            <br />
            <br />
            <label htmlFor="senha">Senha</label>
            <br />
            <Field id="senha" name="senha" type="password" className="input" />
            {errors.senha && <Errors>{errors.senha} - sem ErrorMessage</Errors>}
            <ErrorMessage name="senha" component={Errors} />
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

/*
_ O código usado diretamente já demonstra o efeito assim que é montado caso haja erros.

? {errors.email && <Errors>{errors.email} - sem ErrorMessage</Errors>}

_ Já o modelo usando o ErrorMessage depende do compoenente ter alguma interação.

? <ErrorMessage name="email" component={Errors} />

_ Seria o mesmo que usar o modelo abaixo.

? {errors.email && touched.email && <Errors>{errors.email} - sem ErrorMessage</Errors>}

- Talvez haja alguma configuração apra apresentar já na montagem, mas usar o validateOnMount não funcionou
*/
