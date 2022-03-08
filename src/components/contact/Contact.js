import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import styles from "./stylecontact.module.css";

const Contact = () => {
  return (
    <Container>

      <Grid container justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>

        <Grid item style={{ width: '100%' }} md>
        <Grid container className={styles.ImgBackgroundContact}>
        </Grid >
        </Grid>

        <Grid item container style={{ width: '100%', alignContent: 'center', justifyContent: 'center' }} md >
          <Box
            sx={{
              display: 'block',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
              },

            }}
          >
            <Paper elevation={6} >
              <Grid item container direction='column' alignContent='center' alignItems='center'  >
                <Grid item style={{ marginTop: '1rem' }}>
                  <a
                    href="mailto:hvg.informatico@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <FontAwesomeIcon icon={faAt} style={{ fontSize: '3rem' }} />
                    </IconButton>
                  </a>
                </Grid>
                <Grid item >
                  <Typography>Email</Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={6} >
              <Grid item container direction='column' alignContent='center' alignItems='center'  >
                <Grid item style={{ marginTop: '1rem' }}>
                  <a
                    href="https://github.com/HumbertoValenzuela"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <FontAwesomeIcon icon={faGithub} style={{ fontSize: '3rem' }} />
                    </IconButton>
                  </a>
                </Grid>
                <Grid item >
                  <Typography>Git Hub</Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={6} >
              <Grid item container direction='column' alignContent='center' alignItems='center'  >
                <Grid item style={{ marginTop: '1rem' }}>
                  <a
                    href="https://www.linkedin.com/in/humberto-valenzuela-9aa370207/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '3rem' }} />
                    </IconButton>
                  </a>
                </Grid>
                <Grid item >
                  <Typography>LinkedIn</Typography>
                </Grid>
              </Grid>
            </Paper>

          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact