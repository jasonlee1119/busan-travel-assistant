import { AppBar, Box, Toolbar } from '@mui/material';
import { NavigationDrawer } from './NavigationDrawer';
import { ThemeSelector } from './ThemeSelector';

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
          <Box className="flex-grow" />
          <Box>
            <ThemeSelector />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
