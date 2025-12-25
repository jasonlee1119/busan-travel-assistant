import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { NavigationDrawer } from './NavigationDrawer';
import { ThemeSelector } from './ThemeSelector';
import { Link } from 'react-router';
import icon from '../../assets/south-korea-svgrepo-com.svg';

export function TopBar() {
  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <NavigationDrawer />
          <Link to="/" className="text-decoration-none">
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={icon} alt="My Icon" width={30} height={30} />
              <Box component="span" sx={{ mr: 2 }}>
                釜山旅遊小幫手
              </Box>
            </Stack>
          </Link>
          <Box className="flex-grow" />
          <Box>
            <ThemeSelector />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
