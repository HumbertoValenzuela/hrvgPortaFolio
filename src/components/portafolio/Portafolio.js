import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container, Grid } from '@mui/material';
import GiphyAPI from '../../assets/GiphyAPI.png';
import MERNTask from '../../assets/MernTask.png';
import ArcDevelopment from '../../assets/ArcDevelopment.png';
import DataGrid from '../../assets/DataGrid.png';
import HotelGatsbyCMSStrapi from '../../assets/HotelGatsbyCMSStrapi.png';
import BuscadorDeImagenes from '../../assets/BuscadorDeImagenes.png';
import Criptomonedas from '../../assets/Criptomonedas.png';
import ClimaReactApp from '../../assets/ClimaReactApp.png';
import Mascotas from '../../assets/Mascotas.png';
import AgenciadeViajes from '../../assets/AgenciadeViajes.png';

const Portafolio = () => {
  return (
    <Container style={{ marginTop: '2rem', marginBottom: '2rem', minHeight: '100vh' }}>

      <Grid container direction='row'>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={GiphyAPI}
              alt="Giphy API App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Giphy API App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                App hecho en React.js para buscar gifs de una palabra o frase. Utiliza la API de Giphy. Efectos en CSS, Utilización de React Hook, useState, useEffect

              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://humbertovalenzuela.github.io/06React-Giphy-API-gif/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={MERNTask}
              alt="MERN Task"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MERN Tareas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Registro, login y CRUD de tareas con MongoDB, Express, React, Node.js, JWT. Despliegue en Heroku Backend.
                Netlify Frontend.

              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://vibrant-pasteur-f42017.netlify.app/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={ArcDevelopment}
              alt="Arc Development"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Arc Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web para la empresa Arc Development, envio de correos. Construido con Material-UI, React.js, Node.js, Express, SendGrid.
              </Typography>
            </CardContent>

            <CardActions>
              <Button

                size="small"
                variant='contained'
                href='https://practical-morse-1cdba3.netlify.app/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={DataGrid}
              alt="Data Grid Material-UI"

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DataGrid con Material-UI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Uso de DataGrid con Material-UI. Filtrar, ordenar, agregar, editar Inline, Multi-eliminar. BackEnd Heroku y MySql. Frontend Netlify
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://pensive-gates-4650f5.netlify.app/datagridynamic'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={HotelGatsbyCMSStrapi}
              alt="Hotel Gatsby CMS Strapi"
              sx={{ objectFit: 'fill' }}

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gatsby DatosCMS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Creación de páginas web dinámicas con las herramientas Gatsby.js, GraphQL, DatoCMS, Strapi.
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://thirsty-clarke-04dbc7.netlify.app/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={BuscadorDeImagenes}
              alt="Buscador Imagenes API"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Buscador de Imagenes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                API con Pixabay.com. Buscador de Imagenes. Utilizando React.js y Fetch. Páginación usando la API
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://nervous-ardinghelli-dcbd46.netlify.app/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={Criptomonedas}
              alt="API Criptomonedas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cotizador Criptomonedas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                API con CriptoCompare. Cotizador de criptomonedas. Utilizando React.js y Axios. Formulario de búsqueda.
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://stoic-curran-1b32d8.netlify.app/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={ClimaReactApp}
              alt="Clima React App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Clima en una Ciudad
              </Typography>
              <Typography variant="body2" color="text.secondary">
                API del Clima OpenWeatherMap. Formulario con la ciudad y país que mostrará el clima de una ciudad. Utilizando React.js y Axios.
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://tender-borg-7a1fa4.netlify.app/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={Mascotas}
              alt="Administrador de Mascotas"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Administrador de Mascota
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Agregar y eliminar Citas. Utilizando React.js se guardan datos en LocalStorage para mantener los datos. 
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://tender-borg-7a1fa4.netlify.app/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item style={{ margin: '1rem' }}>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              height="300"
              image={AgenciadeViajes}
              alt="Agencia de Viajes"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Agencia de Viajes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Página web con testimoniales, imagenes, link, Layout. usando React.js, react-router-dom
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                variant='contained'
                href='https://stark-escarpment-48322.herokuapp.com/'
                target='_blank'
                rel="noopener noreferrer"
              >
                Ir al Sitio Web
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>


    </Container>
  );
}

export default Portafolio