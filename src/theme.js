import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E53935', // Bugatti Red accent
      dark: '#B71C1C',
    },
    secondary: {
      main: '#424242', // Dark Grey
    },
    background: {
      default: '#121212', // Black base
      paper: '#1E1E1E',   // Dark Grey for cards/navbar
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
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
          backgroundColor: 'rgba(30, 30, 30, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(229, 57, 53, 0.3)', // Subtle red border
        }
      }
    }
  },
});

export default theme;
