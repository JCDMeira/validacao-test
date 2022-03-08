import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import validationSchema from '../utils/validationSchema';
import Errors from './Errors';

function MyLogin() {
  //
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = 'E-mail é obrigatório';
    const emailSemEspaços = values.email.trim();
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailSemEspaços) &&
      values.email !== ''
    )
      errors.email = 'Insira um e-mail válido';

    if (!values.senha) errors.senha = 'Senha é obrigatória';
    if (values.senha.length < 8 && values.senha !== '')
      errors.senha = 'Senha precisa ter pelo menos 8 caracteres';

    return errors;
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // validate={validate}
        validateOnMount
        validateOnChange
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
            {/* {errors.email && (
              <Errors msg={`${errors.email} - sem ErrorMessage`} />
            )} */}
            <ErrorMessage name="email" component={Errors} />
            <br />
            <br />
            <label htmlFor="senha">Senha</label>
            <br />
            <Field id="senha" name="senha" type="password" className="input" />
            {/* {errors.senha && (
              <Errors msg={`${errors.senha} - sem ErrorMessage`} />
            )} */}
            <ErrorMessage name="senha" component={Errors} />
            <br />
            <br />
            <button
              type="submit"
              disabled={Object.keys(errors).length > 0 ? true : false}
            >
              enviar
            </button>
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
