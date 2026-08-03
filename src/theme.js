import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#139FCB', // Cyan/Blue from logo
      dark: '#0e7a9e',
    },
    secondary: {
      main: '#727272', // Grey from logo
    },
    background: {
      default: '#0a0a0a', // Jet Black
      paper: '#121212',   // Slightly lighter Jet Black for cards
    },
    text: {
      primary: '#ffffff', // White for copywriting
      secondary: '#d0d0d0', // Light grey for secondary text
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#ffffff',
    },
    h2: {
      fontWeight: 600,
      color: '#ffffff',
    },
    body1: {
      color: '#ffffff',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.9)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(19, 159, 203, 0.3)', // Cyan border accent
        }
      }
    }
  },
});

export default theme;
