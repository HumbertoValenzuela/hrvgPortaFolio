import React from 'react';
import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// Componentes
import ResponsiveAppBar from './components/appbar/AppBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Sobre from './components/about/Sobre';
import Portafolio from './components/portafolio/Portafolio';

// React-router-dom
import { Route, Routes } from 'react-router-dom';
import './App.css';

const PortaFolio = (props) => {
  return (
    <Grid className="App">
      <CssBaseline />

      <header >
        <ResponsiveAppBar
          setEscogerColor={props.setEscogerColor}
          escogerColor={props.escogerColor}
        />
      </header>

      <Routes>

        <Route path="/hrvgPortaFolio/" element={<Home />} />
        <Route path="/hrvgPortaFolio/Sobre" element={<Sobre />} />
        <Route path="/hrvgPortaFolio/Contacto" element={<Contact />} />
        <Route path="/hrvgPortaFolio/Portafolio" element={<Portafolio />} />
      </Routes>


      <Footer />

    </Grid>
  )
}

export default PortaFolio