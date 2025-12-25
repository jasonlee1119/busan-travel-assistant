import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  Icon,
  IconButton,
  InitColorSchemeScript,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
import { closeSnackbar, SnackbarProvider } from 'notistack';

const theme = createTheme({
  cssVariables: { cssVarPrefix: 'any', colorSchemeSelector: 'class' },
  colorSchemes: {
    light: true,
    dark: true,
  },
  defaultColorScheme: 'dark',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InitColorSchemeScript />
    <CssBaseline />
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

