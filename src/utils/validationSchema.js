import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('Esse é um campo obrigatório')
    .email('Insira um e-mail válido'),
  senha: Yup.string()
    .required('Esse é um campo obrigatório')
    .min(8, 'Senha deve ter no mínimo 8 caracteres'),
});
