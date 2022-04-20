import { Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

function App() {
  return (
    <Paper sx={{ height: '100vh' }}>
      <Typography variant="h1">Hello King Wisdom</Typography>
      <Button variant="outlined">Go to details</Button>
      <TextField variant="outlined" label="Username" error helperText="Please enter your username" />
    </Paper>
  );
}

export default App;
