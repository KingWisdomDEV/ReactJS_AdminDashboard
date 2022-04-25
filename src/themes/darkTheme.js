import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { THEMES } from '../constants';

const darkTheme = createTheme({
  palette: {
    mode: THEMES.DARK,
    primary: {
      main: red[500],
      light: '#ff8788',
      dark: '#ff0103',
      contrastText: '#fff',
    },
  },
});

export default darkTheme;
