//  ! https://formik.org/docs/examples/with-material-ui
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useFormik } from 'formik';
import validationSchema from '../utils/validationSchema';
import Errors from './Errors';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/JCDMeira">
        Jean Carlos De Meira
      </Link>{' '}
      with <Link href="https://mui.com/pt/">material UI</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();

const WithMaterialUI = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ mt: 15, mb: 1, bgcolor: 'secondary.main' }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <form onSubmit={formik.handleSubmit}>
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
                // helperText={formik.errors.email}
              />
              {formik.errors.email && <Errors msg={`${formik.errors.email}`} />}
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
                // helperText={formik.errors.senha}
              />

              {formik.errors.senha && <Errors msg={`${formik.errors.senha}`} />}
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
            </form>
            <Copyright sx={{ mt: 5 }} />
          </Box>
          {/* </Box> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default WithMaterialUI;
