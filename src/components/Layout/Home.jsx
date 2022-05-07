import { Box, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Header from '../Header';
import LeftNavigation from '../LeftNavigation';

const leftNavigationWidth = 240;

const useStyles = makeStyles(theme => ({
  header: {
    // background: theme.palette.primary.main,
  },
  leftNavigation: {
    width: leftNavigationWidth,
    background: theme.palette.secondary.main,
    height: '100vh',
  },
  content: {
    width: `calc(100% - ${leftNavigationWidth}px)`,
  },
  mainContent: {
    background: theme.palette.success.main,
  },
}));
function HomeLayout({ children }) {
  const classes = useStyles();

  return (
    <Stack direction="row">
      <Box className={classes.leftNavigation}>
        <LeftNavigation />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.header}>
          <Header />
        </Box>
        <Box className={classes.mainContent}>{children}</Box>
      </Box>
    </Stack>
  );
}

export default HomeLayout;
