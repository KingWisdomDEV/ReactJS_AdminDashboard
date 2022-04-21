import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button, Paper, Typography } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  bgPrimary: {
    backgroundColor: theme.palette.primary.main,
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

function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h1" className={classes.bgPrimary}>
        Hello King Wisdom
      </Typography>
      <Typography variant="h2" color="primary">
        Hello King Wisdom
      </Typography>
      <Typography variant="h3">Hello King Wisdom</Typography>
      <Button variant="outlined" startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button variant="outlined" color="secondary" endIcon={<SendIcon />}>
        Send Message
      </Button>
      <MyButton>My Button STyled</MyButton>
    </Paper>
  );
}

export default App;
