import { DashboardOutlined } from '@mui/icons-material';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListIcon from '@mui/icons-material/List';
import MailIcon from '@mui/icons-material/Mail';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'inherit',
  },
}));

const ListItemStyled = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  // [theme.breakpoints.down('md')]: {
  //   flexDirection: 'column',
  //   '& .MuiListItemIcon-root': {
  //     justifyContent: 'center',
  //   },
  // },
  ...(!open && {
    flexDirection: 'column',
    '& .MuiListItemIcon-root': {
      justifyContent: 'center',
    },
  }),
}));

const ListItemTextStyled = styled(ListItemText, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  // [theme.breakpoints.down('md')]: {
  //   '& .MuiTypography-root': {
  //     fontSize: 10,
  //   },
  // },
  ...(!open && {
    '& .MuiTypography-root': {
      fontSize: 10,
    },
  }),
}));

function LeftNavigation(props) {
  const { open } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List>
        <ListItemStyled open={open}>
          <ListItemIcon>
            <DashboardOutlined />
          </ListItemIcon>
          <ListItemTextStyled open={open}>Dashboard</ListItemTextStyled>
        </ListItemStyled>
        <ListItemStyled open={open}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemTextStyled open={open}>Products</ListItemTextStyled>
        </ListItemStyled>
        <ListItemStyled open={open}>
          <ListItemIcon>
            <FavoriteBorderIcon />
          </ListItemIcon>
          <ListItemTextStyled open={open}>Favorites</ListItemTextStyled>
        </ListItemStyled>
        <ListItemStyled open={open}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemTextStyled open={open}>Inbox</ListItemTextStyled>
        </ListItemStyled>
        <ListItemStyled open={open}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemTextStyled open={open}>Order Lists</ListItemTextStyled>
        </ListItemStyled>
        <ListItemStyled open={open}>
          <ListItemIcon>
            <PeopleOutlineIcon />
          </ListItemIcon>
          <ListItemTextStyled open={open}>Team</ListItemTextStyled>
        </ListItemStyled>
        <ListItemStyled open={open}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemTextStyled open={open}>Settings</ListItemTextStyled>
        </ListItemStyled>
      </List>
      {/* </Link> */}
    </Box>
  );
}

export default LeftNavigation;
