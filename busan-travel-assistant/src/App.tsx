import './App.css';
import { BrowserRouter } from 'react-router';
import { Router } from './router/Router';
import { TopBar } from './components/topbar/TopBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';

export default function App() {
  return (
    <>
      <BrowserRouter basename="/busan-travel-assistant">
        <Box
          sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          <TopBar />
          <div>
            <Toolbar />
            <Router />
          </div>
        </Box>
      </BrowserRouter>
    </>
  );
}

