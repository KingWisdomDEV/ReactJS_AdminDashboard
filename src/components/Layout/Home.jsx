import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { STYLES } from '../../constants';
import Header from '../Header';
import LeftNavigation from '../LeftNavigation';

const useStyles = makeStyles(theme => ({
  header: {
    // background: theme.palette.primary.main,
  },
  // leftNavigation: {
  //   height: '100vh',
  //   width: STYLES.leftNavigationWidth,
  //   [theme.breakpoints.down('md')]: {
  //     width: theme.spacing(11),
  //   },
  //   borderRight: `1px solid ${theme.palette.divider}`,
  // },
  content: {
    width: '100%',
  },
  mainContent: {
    background: theme.palette.success.main,
    width: '100%',
  },
  drawer: {
    width: STYLES.leftNavigationWidth,
    '& .MuiPaper-root': {
      width: STYLES.leftNavigationWidth,
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(9),
      '& .MuiPaper-root': {
        width: theme.spacing(9),
      },
    },
  },
}));

const LeftNavBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  height: '100vh',
  borderRight: `1px solid ${theme.palette.divider}`,
  width: STYLES.leftNavigationWidth,
  // [theme.breakpoints.down('md')]: {
  //   width: theme.spacing(11),
  // },
  ...(!open && {
    width: theme.spacing(11),
  }),
}));

function HomeLayout({ children }) {
  const classes = useStyles();
  const [openLeftBar, setOpenLeftBar] = useState(true);

  const toggleDrawer = () => {
    setOpenLeftBar(!openLeftBar);
  };

  const toggleLeftBar = () => {
    setOpenLeftBar(!openLeftBar);
  };

  return (
    <Box>
      <Box className={classes.header}>
        <Header handleToggleMenu={toggleDrawer} />
      </Box>
      <Stack direction="row">
        <LeftNavBox open={openLeftBar}>
          {/* <SwipeableDrawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            open={openLeftBar}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          > */}
          <LeftNavigation open={openLeftBar} />
          {/* </SwipeableDrawer> */}
        </LeftNavBox>
        <Box className={classes.content}>
          <Box className={classes.mainContent}>{children}</Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default HomeLayout;
