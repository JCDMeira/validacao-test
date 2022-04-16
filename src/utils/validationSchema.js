import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email(`Insira um e-mail válido.`)
    .required('Esse é um campo obrigatório'),
  senha: Yup.string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .required('Esse é um campo obrigatório'),
});
