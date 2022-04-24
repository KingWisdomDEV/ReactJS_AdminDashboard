import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const darkTheme = createTheme({
  mode: 'dark',
  palette: {
    primary: {
      main: red[500],
      light: '#ff8788',
      dark: '#ff0103',
      contrastText: '#fff',
    },
  },
});

export default darkTheme;
