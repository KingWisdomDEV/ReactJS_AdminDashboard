import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    // background: theme.palette.secondary.main,
  },
}));

function LeftNavigation() {
  const classes = useStyles();
  return <Box className={classes.root}>LeftNavigation</Box>;
}

export default LeftNavigation;
