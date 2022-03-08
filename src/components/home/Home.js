import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import styles from "./Divbackground.module.css";
import yo from './yo.png';
import { Content, YoImg, GridImagenYNombre, TituloNombreH1 } from './styledComponent';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const Home = () => {

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container className={styles.ImgBackgroundHome}>
      <Grid item >
        <Content container direction={matchesMD ? 'column' : 'row'}>
          <GridImagenYNombre item md >
            <YoImg src={yo} alt="yo" />
          </GridImagenYNombre>
          <Grid item md  >
            <TituloNombreH1
              variant="h4"
              component="h1"
            >
              Humberto Valenzuela
            </TituloNombreH1>

            <Grid container justifyContent='center' alignItems='center'>
              <Grid item >
                <AutoAwesomeIcon fontSize="small" />
              </Grid>
              <Grid item>
                <TituloNombreH1 variant="h6" component="h2" >
                  Desarrollo FronEnd
                </TituloNombreH1>
              </Grid>
            </Grid>

          </Grid>

        </Content>
      </Grid>
    </Grid >
  )
};

export default Home;