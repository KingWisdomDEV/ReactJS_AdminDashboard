import { green } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let customTheme = createTheme({
  palette: {
    secondary: {
      main: green[500],
      light: '#ff8788',
      dark: '#ff0103',
      contrastText: '#fff',
    },
  },
});

customTheme = responsiveFontSizes(customTheme);

export default { ...customTheme };
