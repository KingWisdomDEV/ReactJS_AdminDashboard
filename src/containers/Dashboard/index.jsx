import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { HomeLayout } from '../../components';
import { authActions } from '../Auth/authSlice';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.success.main,
  },
}));

function Dashboard() {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <HomeLayout>
      <Box className={classes.root}>
        Dashboard Page
        <Link to="/dashboard">Dashboard</Link>
        <hr />
        <Link to="/dashboard1">Dashboard1</Link>
        <hr />
        <Link to="/dashboard2">Dashboard2</Link>
        <hr />
        <Button onClick={() => dispatch(authActions.logout())}>Logout</Button>
        <Outlet />
      </Box>
    </HomeLayout>
  );
}

export default Dashboard;
