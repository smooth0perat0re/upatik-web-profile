import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b0b0b0', // Metallic Modern Grey
      dark: '#808080',
    },
    secondary: {
      main: '#2c2c2c', // Dark Metallic
    },
    background: {
      default: '#0a0a0a', // Jet Black
      paper: '#121212',   // Slightly lighter Jet Black for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
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
          backgroundColor: 'rgba(10, 10, 10, 0.9)', // Jet Black with transparency
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(176, 176, 176, 0.2)', // Metallic border
        }
      }
    }
  },
});

export default theme;
