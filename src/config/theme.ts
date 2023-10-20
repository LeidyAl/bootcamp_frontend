import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#003045"
    },
    secondary: {
      main: '#00405d',
    },
    text: {
      primary: '#040f17'
    }
  },
  components:{
    MuiDialog:{
      styleOverrides:{
      paper:{
        borderRadius: 20
      }
      }
    },
    MuiTypography:{
      styleOverrides:{
        h6:{
          fontWeight: 'bold'
        }
      }
    }
  }
});
