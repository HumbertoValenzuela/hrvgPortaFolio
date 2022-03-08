import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logoHumberto.png';

import { LinkStyled } from './appbarStyled';


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = (props) => {
  const { setEscogerColor, escogerColor } = props;

  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleEscogeColor = () => {
    if (escogerColor === 'dark') {
      setEscogerColor('light');
    } else {
      setEscogerColor('dark');
    }

  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  console.log('render')

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <LinkStyled to='/hrvgPortaFolio/'>Inicio</LinkStyled>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <LinkStyled to='/hrvgPortaFolio/Sobre/'>Sobre</LinkStyled>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <LinkStyled to='/hrvgPortaFolio/Contacto/'>Contacto</LinkStyled>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <LinkStyled to='/hrvgPortaFolio/Portafolio/'>Portafolio</LinkStyled>
                </Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} className="App-logoMobile" alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <LinkStyled to='/hrvgPortaFolio/'>Inicio</LinkStyled>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <LinkStyled to='/hrvgPortaFolio/Sobre/'>Sobre</LinkStyled>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <LinkStyled to='/hrvgPortaFolio/Contacto/'>Contacto</LinkStyled>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <LinkStyled to='/hrvgPortaFolio/Portafolio/'>Portafolio</LinkStyled>
            </Button>

          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Typography>
              Tema {escogerColor}
            </Typography>
            <IconButton onClick={handleEscogeColor} >
              {escogerColor === 'dark' ? <Brightness4Icon style={{ color: 'rgba(255, 255, 255, 0.5)' }} /> : <Brightness7Icon style={{ color: 'white' }} />}
            </IconButton>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
