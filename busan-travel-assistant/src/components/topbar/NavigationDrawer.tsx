import { useState } from 'react';
import { getNavigationItems } from '../../router/routes';
import {
  Box,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function NavigationDrawer() {
  const [isOpened, setIsOpened] = useState(false);
  const navigationItems = getNavigationItems();
  const handleNavigation = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <IconButton
        color="inherit"
        edge="start"
        aria-label="menu"
        onClick={() => setIsOpened(!isOpened)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        variant="temporary"
        open={isOpened}
        onClose={() => setIsOpened(false)}
        slotProps={{
          paper: {
            sx: { width: 200, flexShrink: 0 },
          },
        }}
      >
        <Toolbar />

        <Box className="p-4">
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  LinkComponent={item.component}
                  onClick={handleNavigation}
                  className="rounded-lg mb-1"
                >
                  <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
