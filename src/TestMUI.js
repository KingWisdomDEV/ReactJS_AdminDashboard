import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { LOCALES, THEMES } from './constants';
import { selectThemeMode, userPreferenceActions } from './redux/userPreferenceSlice';
import { changeLocale } from './i18next';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  bgPrimary: {
    background: theme.palette.primary.main,
  },
  bgSecondary: {
    background: theme.palette.secondary.main,
  },
  txtWhite: {
    color: theme.palette.common.white,
  },
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
  },
}));

const MyButton = styled(Button)({
  background: 'blue',
  color: 'white',
  height: 30,
  padding: '0 15px',
  '&:hover': {
    background: 'red',
  },
});

function TestMUI() {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentThemeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  return (
    <Paper className={classes.root}>
      <Typography variant="h1" className={clsx(classes.bgPrimary, classes.txtWhite)}>
        Hello King Wisdom
      </Typography>
      <Typography variant="h2" color="primary">
        Hello King Wisdom
      </Typography>
      <Typography variant="h3" className={classes.bgSecondary}>
        Hello King Wisdom
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <Button variant="outlined" startIcon={<SaveIcon />}>
          Save
        </Button>
        <Button variant="outlined" color="secondary" endIcon={<SendIcon />}>
          Send Message
        </Button>
        <Button className={classes.btn}>Custome Button</Button>
        <MyButton>My Button Styled</MyButton>
      </Stack>
      <hr />
      {currentThemeMode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={() =>
          dispatch(userPreferenceActions.changeTheme(currentThemeMode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))
        }
        color="inherit"
      >
        {currentThemeMode === THEMES.LIGHT ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <hr />
      <h1>{t('hello')}</h1>
      <h1>{t('hello-name', { name: 'King Wisdom' })}</h1>
      {/* <Trans>hello</Trans> */}
      <Trans values={{ name: 'King' }}>hello-name</Trans>
      <button onClick={() => changeLocale(LOCALES.VIETNAM)}>Vietnam</button>
      <button onClick={() => changeLocale(LOCALES.ENGLISH)}>English</button>
      {/* <button onClick={() => i18n.changeLanguage(LOCALES.VIETNAM)}>Vietnam</button>
      <button onClick={() => i18n.changeLanguage(LOCALES.ENGLISH)}>English</button> */}
      {/* <button onClick={() => dispatch(userPreferenceActions.changeLocale(LOCALES.VIETNAM))}>Vietnam</button>
      <button onClick={() => dispatch(userPreferenceActions.changeLocale(LOCALES.ENGLISH))}>English</button> */}
    </Paper>
  );
}

export default TestMUI;
