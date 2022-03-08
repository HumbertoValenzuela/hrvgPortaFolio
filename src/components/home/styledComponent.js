import styled from '@emotion/styled';
// import backGroundHome from './back.jpg';
// import backGroundHome2 from './back3.jpg'
import { Grid, Typography } from '@mui/material';


export const Content = styled(Grid)({
  justifyContent: 'center',
  alignItems: 'center',  
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%', 
  transform: `translate(-50%, -50%)` 
});

export const GridImagenYNombre = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {  
    marginBottom: '2rem'
  },
}) );

export const YoImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',   
  clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', 
  [theme.breakpoints.down("md")]: {
    clipPath: 'none',
    width: '15rem',
    marginBottom: '3rem'
  },

}) );

export const TituloNombreH1 = styled(Typography)(({ theme }) => ({
  margin: '0', 
  fontSize: '2rem',
  color: '#fff',
  textShadow: '0 0 20px #2bff00',
  textAlign: 'center', 
  '&:hover': {
    color: '#fff',
    textShadow: '0 0 10px #000',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '1.5rem',    
  },  
}) );

// export const ImgBackgroundHome = styled('div')({
//   position: 'relative',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',

//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     top: '0px',
//     right: '0px',
//     bottom: '0px',
//     left: '0px',
//     backgroundImage: `url(${backGroundHome})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     opacity: '0.9',
//     transitionProperty: 'backgroundImage opacity',
//     transitionDuration: '2s',
//     transitionTimingFunction: 'ease-in-out',
//     transitionDelay: '0s',
//   },

//   '&:hover:before': {
//     opacity: '1',
//     backgroundImage: `url(${backGroundHome2})`,    
//   },

  
  
// });
