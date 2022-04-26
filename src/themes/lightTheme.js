import { createTheme } from '@mui/material';
import { THEMES } from '../constants';

const lightTheme = createTheme({
  palette: {
    mode: THEMES.LIGHT,
    primary: {
      main: '#4B79EB',
      light: '#ff8788',
      dark: '#ff0103',
      contrastText: '#fff',
    },
  },
});

export default lightTheme;
