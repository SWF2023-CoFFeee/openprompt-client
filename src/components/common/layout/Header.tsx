import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import RouterMeta from '@/lib/RouterMeta';
import palette from '@/styles/mui/palette';

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: '0',
        paddingY: '2px',
        paddingTop: '5px',
        backgroundColor: 'rgba(255, 255, 2555, 0.15)',
        backdropFilter: 'blur(80px)',
        boxShadow: '0px 4px 40px 0px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, marginLeft: '30px' }}>
            <NavLink to={'/'}>
              <img src={'/imgs/logo/coffeee-logo-white.png'} alt="home" />
            </NavLink>
          </Box>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '100px' }}
          >
            {Object.keys(RouterMeta).map((router) => {
              if (!RouterMeta[router].isShow) {
                return;
              }
              return (
                <Button
                  disableRipple
                  key={router}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <NavLink
                    to={RouterMeta[router].path}
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                    })}
                  >
                    <Typography>{RouterMeta[router].name}</Typography>
                  </NavLink>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
