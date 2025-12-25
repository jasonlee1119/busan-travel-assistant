import { AppBar, Toolbar } from '@mui/material';

export function TopBar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
}
