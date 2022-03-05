# Teste com validação de formulário no front-end

Busca testar comportamentos de validação de formulários no fron-end.

Foram feitos testes de comportamente com o formik + yup e outros testes com formik + yup + MUI.

## Formik + Yup

O teste pode ser visto em myLogin;

O comportamento da mensagem de erro varia dependendo da forma como é utilzada.

O código usado diretamente já demonstra o efeito assim que é montado caso haja erros. Considerando que a flag validateOnMount é passada para o componente Formik.

E também não é usado o componente pronto de mensagem de erros, o ErrorMessage.

```jsx
{
  errors.email && <Errors>{errors.email} - sem ErrorMessage</Errors>;
}
```

Já o modelo usando o ErrorMessage depende do compoenente ter alguma interação. Sendo que as vezes precisa clicar, escrever, clicar fora e voltar a interagir. Em alguns momentos só mostrando após o envio.

```jsx
<ErrorMessage name="email" component={Errors} />
```

Seria o mesmo que usar o modelo abaixo. Que mesmo se o componente de mensagens de erro já conta o fator se houve interação ou não com o input em questão.

```jsx
{
  errors.email && touched.email && (
    <Errors>{errors.email} - sem ErrorMessage</Errors>
  );
}
```

- Talvez haja alguma configuração apra apresentar já na montagem, mas usar o validateOnMount não funcionou conforme o esperado.

## Formik + Yup + MUI

Nesse caso é relevado um custom hook que é atribuido a uma constante passando algumas configurações.

```jsx
const formik = useFormik({
  initialValues: {
    email: '',
    senha: '',
  },
  validationSchema: validationSchema,
  onSubmit: (values) => {
    console.log(values);
  },
});
```

E então todos os detalhes necessários são inseridos em componentes prontos do MUI ou passados para as tags html.

No form é passado a seguinte forma para o submit.

```html
<form onSubmit="{formik.handleSubmit}"></form>
```

Já os textField's receber as proprierdades value, onChance, error e helpText relacionados ao Formik, pra entrelaçar o formulário ao mesmo.
Porém o fomulário só valida após alguma mudança nos campos, não está validando ao iniciar o form.

```jsx
 <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="senha"
                label="senha"
                type="password"
                id="senha"
                autoComplete="current-senha"
                value={formik.values.senha}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.senha)}
                helperText={formik.errors.senha}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ mt: 3, mb: 2 }}
                disabled={
                  Boolean(formik.errors.email) || Boolean(formik.errors.senha)
                }
              >
                Submit
              </Button>
```

## Links úteis

- [MUI com Formik](https://formik.org/docs/examples/with-material-ui)

# 📝 Procedimentos de instalação

Clone este repositório usando o comando:

```bash
git clone https://github.com/JCDMeira/validacao-test.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```bash
npm install

ou

yarn install
```

Para iniciar o servidor é só usar o comando

```
yarn start

ou

npm start

```
