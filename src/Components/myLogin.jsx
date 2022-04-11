import React from 'react';
import { Field, Form, Formik } from 'formik';

function MyLogin() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'E-mail é requerido';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'E-mail inválido';
    }

    if (!values.senha) {
      errors.senha = 'Senha é requerida';
    }
    if (values.senha && values.senha.length < 8) {
      errors.senha = 'Senha precisa ter pelo menos 8 caracteres';
    }

    return errors;
  };
  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        validate={validate}
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
            {errors.email && <span>{errors.email} </span>}

            <br />
            <br />
            <label htmlFor="senha">Senha</label>
            <br />
            <Field id="senha" name="senha" type="password" className="input" />
            {errors.senha && <span>{errors.senha} </span>}
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
