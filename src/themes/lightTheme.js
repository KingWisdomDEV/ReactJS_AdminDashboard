import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import { THEMES } from '../constants';

const lightTheme = createTheme({
  palette: {
    mode: THEMES.LIGHT,
    primary: {
      main: green[500],
      light: '#ff8788',
      dark: '#ff0103',
      contrastText: '#fff',
    },
  },
});

export default lightTheme;
