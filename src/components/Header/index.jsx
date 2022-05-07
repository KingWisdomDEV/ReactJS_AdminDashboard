import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    // background: theme.palette.primary.main,
  },
}));
function Header() {
  const classes = useStyles();
  return <Box className={classes.root}>Header</Box>;
}

export default Header;
