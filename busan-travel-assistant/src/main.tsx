import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
  createTheme,
  GlobalStyles,
  Icon,
  IconButton,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { amber, lightBlue } from '@mui/material/colors';
import { closeSnackbar, SnackbarProvider } from 'notistack';

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: amber[700],
        },
        secondary: {
          main: lightBlue[700],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: amber[500],
        },
        secondary: {
          main: lightBlue[500],
        },
      },
    },
  },
  defaultColorScheme: 'light',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles="@layer base, mui, utilities;" />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          action={(snackbarId) => (
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => closeSnackbar(snackbarId)}
            >
              <Icon fontSize="small">Close</Icon>
            </IconButton>
          )}
        >
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);

