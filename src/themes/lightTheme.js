import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

const lightTheme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: green[500],
      light: '#ff8788',
      dark: '#ff0103',
      contrastText: '#fff',
    },
  },
});

export default lightTheme;
