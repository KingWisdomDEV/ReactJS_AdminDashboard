import { Box, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    // background: theme.palette.secondary.main,
  },
  logoTxt: {
    fontSize: 24,
  },
}));

function LeftNavigation() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link to="/dashboard">
        <Stack direction="row" justifyContent="center" spacing={1} paddingY={2}>
          <Typography fontWeight="bold" color="primary" className={classes.logoTxt}>
            Bright
          </Typography>
          <Typography fontWeight="bold" className={classes.logoTxt}>
            Web
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
}

export default LeftNavigation;
