import { SearchOutlined } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import flagEnglish from '../../assets/locales/en.svg';
import flagVietnam from '../../assets/locales/vi.svg';
import { LOCALES } from '../../constants';
import { authActions } from '../../containers/Auth/authSlice';
import { selectLocale, userPreferenceActions } from '../../redux/userPreferenceSlice';

const useStyles = makeStyles(theme => ({
  searchBox: {
    width: 350,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.25),
    },
  },
  input: {
    borderRadius: theme.spacing(5),
  },
  select: {
    '& .MuiSelect-select': {
      width: theme.spacing(10),
      padding: theme.spacing(1.25),
      '&:focus': {
        background: 'none',
      },
    },
  },
  flag: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  menuMoreAction: {
    '& .MuiMenu-list': {
      width: theme.spacing(30),
    },
  },
  iconMoreAction: {
    background: theme.palette.grey[200],
  },
  iconMenuItem: {
    background: theme.palette.grey[200],
    marginRight: theme.spacing(1.5),
  },
}));

const flagImgs = {
  [LOCALES.VIETNAM]: flagVietnam,
  [LOCALES.ENGLISH]: flagEnglish,
};

function Header() {
  const classes = useStyles();
  const currentLocale = useSelector(selectLocale);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const currentUser = {
    name: 'King Wisdom',
    userType: 'Admin',
    img: 'https://lh3.googleusercontent.com/a-/AOh14Gg7AHgSPfXWtaXPIFIfSUkaLy3_C0x41W1zjv14=s288-p-rw-no',
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMoreAction = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const handleChangeLocale = event => {
    const locale = event.target.value;

    i18n.changeLanguage(locale);
    dispatch(userPreferenceActions.changeLocale(locale));
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" paddingX={4} paddingY={2}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton aria-label="toggle-menu">
            <MenuIcon />
          </IconButton>
          <TextField
            placeholder={t('headerComponent.searchTxt')}
            className={classes.searchBox}
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton aria-label="icon-notification">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon color="primary" />
            </Badge>
          </IconButton>
          <Select
            value={currentLocale}
            onChange={handleChangeLocale}
            className={classes.select}
            variant="standard"
            disableUnderline
            startAdornment={
              <InputAdornment position="start">
                <img src={flagImgs[currentLocale]} className={classes.flag} alt="" />
              </InputAdornment>
            }
          >
            <MenuItem value={LOCALES.ENGLISH}>
              <Trans>headerComponent.language.english</Trans>
            </MenuItem>
            <MenuItem value={LOCALES.VIETNAM}>
              <Trans>headerComponent.language.vietnam</Trans>
            </MenuItem>
          </Select>
          <Stack direction="row" spacing={3} alignItems="center">
            <Avatar src={currentUser.img} className={classes.avatar} />
            <Stack>
              <Typography variant="subtitle1" fontWeight="bold">
                {currentUser.name}
              </Typography>
              <Typography variant="subtitle2" fontWeight="normal">
                {currentUser.userType}
              </Typography>
            </Stack>
          </Stack>
          <IconButton onClick={handleClick} className={classes.iconMoreAction} size="small">
            {openMoreAction ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
          <Menu anchorEl={anchorEl} open={openMoreAction} onClose={handleClose} className={classes.menuMoreAction}>
            <MenuItem onClick={handleClose}>
              <IconButton disableRipple className={classes.iconMenuItem}>
                <MoreHorizIcon />
              </IconButton>
              <Typography variant="body1">
                <Trans>headerComponent.profileLb</Trans>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <IconButton disableRipple className={classes.iconMenuItem}>
                <LogoutIcon />
              </IconButton>
              <Typography variant="body1">
                <Trans>headerComponent.logoutLb</Trans>
              </Typography>
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
