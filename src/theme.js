import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6750A4' },
    secondary: { main: '#686868ff' },
    tertiary: {main: '#7D5260'},
    background: {main: '#EADDFF', secondary: '#F7F2FA'},
  },
  typography: {
    h1: {
      fontSize: 'clamp(3rem, 6vw, 9rem)',
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 6rem)',
    },
    h3: {
      fontSize: 'clamp(0.5rem, 2.5vw, 3.5rem)',
    },
    h4: {
      fontSize: 'clamp(2rem, 4vw, 5rem)',
    },
    h5: {
      fontSize: 'clamp(1rem, 3vw, 4rem)',
    },
    h6: {
      fontSize: 'clamp(0.5rem, 2.5vw, 3.5rem)',
    },
    p: {
      fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
