/* eslint-disable react/no-unescaped-entities */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import loginArt from '../../assets/login-vector-art.png';
import { CheckboxStyled, TextFieldStyled } from '../../components';

const schema = yup
  .object({
    email: yup.string().required('Email must not be empty'),
    password: yup.string().required('Password must not be empty'),
  })
  .required();

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      alignItems: 'start',
    },
  },
  layout: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  img: {
    display: 'flex',
    flex: 1,
    [theme.breakpoints.down('md')]: {
      width: '50%',
      flex: 0,
    },
  },
  form: {
    maxWidth: 500,
    borderRadius: theme.spacing(4),
    padding: theme.spacing(4),
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[3],
  },
  link: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

function SignInScreen() {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      isRememberPassword: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box className={classes.layout}>
        <Box className={classes.img}>
          <img src={loginArt} alt="login-vector-art" />
        </Box>
        <Container className={classes.form} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box textAlign="center">
            <Typography variant="h4" color="primary" gutterBottom fontWeight="bold">
              LOGIN TO ACCOUNT
            </Typography>
            <Typography variant="body1">Please enter your email and password to continue</Typography>
          </Box>
          <Stack spacing={2} mt={3}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextFieldStyled
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Email"
                  fullWidth
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextFieldStyled
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  label="Password"
                  type="password"
                  fullWidth
                  helperText={errors.password?.message}
                />
              )}
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Controller
              name="isRememberPassword"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <CheckboxStyled onChange={onChange} onBlur={onBlur} value={value} label="Remember Password" />
              )}
            />
            <Link to="create-account" className={classes.link}>
              <Typography variant="subtitle2">Forgot Password?</Typography>
            </Link>
          </Stack>
          <Stack spacing={2} alignItems="center" mt={3}>
            <Button type="submit" variant="contained" sx={{ textTransform: 'capitalize', width: '80%' }}>
              Sign in
            </Button>
            <Stack direction="row" spacing={1}>
              <Typography variant="subtitle2">Don't have an account?</Typography>
              <Typography variant="subtitle2" color="primary" sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Create Account
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}

export default SignInScreen;
