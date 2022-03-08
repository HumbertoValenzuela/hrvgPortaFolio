
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import { Tipografia } from './footerstyled'
import { Grid } from '@mui/material';


export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }} >

          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Tooltip title="Ir a mi Linkedin" placement="top-end">
                <a
                  href="https://www.linkedin.com/in/humberto-valenzuela-9aa370207/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </Tooltip>
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Tooltip title="Ir a mi GitHub" placement="top-end">
                <a
                  href="https://github.com/HumbertoValenzuela"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
              </Tooltip>
            </IconButton>
          </Grid>

          <Tipografia >
            Copyright © {new Date().getFullYear()}  All Rights Reserved
          </Tipografia>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

