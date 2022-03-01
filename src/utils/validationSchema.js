import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().required('Esse é um campo obrigatório'),
  senha: Yup.string().required('Esse é um campo obrigatório'),
});
