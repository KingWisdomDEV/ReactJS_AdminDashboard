import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

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
    </Paper>
  );
}

export default TestMUI;
