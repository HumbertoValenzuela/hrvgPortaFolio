import React from 'react'
import { Box, Grid, Paper, Typography, Container, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJs, faNode, faNpm, faReact } from '@fortawesome/free-brands-svg-icons';
import IconButton from '@mui/material/IconButton';
import { faDatabase, faGear } from '@fortawesome/free-solid-svg-icons';
import cv from '../../assets/CVPortafolio.pdf';

const Sobre = () => {
  return (
    <section>
      <Container style={{ marginTop: '2rem', marginBottom: '2rem', minHeight: '100vh' }} >
        <Grid container  >
          <Grid
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            item
          >
            <Grid item style={{ marginBottom: '1rem' }}>
              <Typography variant='h4' align='center'>
                ¿Quién soy?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>
                Soy un desarrollador web, apasionado por la tecnología y la programación.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>
                Me gusta aprender nuevas tecnologías y desarrollar aplicaciones web.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>
                Me considero una persona responsable, con una actitud positiva y una gran capacidad de adaptación.
              </Typography>
            </Grid>
            <Grid item container justifyContent='center'  >

              <Button
                style={{ marginTop: '2rem', marginBottom: '2rem' }}
                variant='contained'
                href={cv}
                target='_blank'
                download="CVPortafolio.pdf"
                rel="noopener noreferrer" >
                Curriculum Vitae
              </Button>
              
            </Grid>
          </Grid>

          <Grid xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={7}
            item
          >
            <Grid item style={{ marginBottom: '1rem' }}>
              <Typography variant='h4' align='center'>
                Mis Habilidades:
              </Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                  },
                  justifyContent: 'center',
                }}
              >
                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faJs} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>JavaScript</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faReact} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>React.js v17</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faNode} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>Node</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>SQL</Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <svg width="50" height="50" viewBox="0 0 256 208" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">

                          <path d="M15.6235294,35.0117647 L15.6235294,122.541176 L30.6823529,114.070588 L30.6823529,43.4823529 L15.6235294,35.0117647 Z" fill="#949494"></path>
                          <path d="M0.564705882,114.070588 L0.564705882,8.65882353 L89.9764706,59.4823529 L89.9764706,77.3647059 L15.6235294,35.0117647 L15.6235294,122.541176 L0.564705882,114.070588 Z" fill="#EFEFEF"></path>
                          <path d="M181.270588,8.65882353 L181.270588,114.070588 L121.035294,147.952941 L105.976471,138.541176 L166.211765,104.658824 L166.211765,34.0705882 L89.9764706,77.3647059 L89.9764706,59.4823529 L181.270588,8.65882353 Z" fill="#949494"></path>
                          <path d="M166.211765,0.188235294 L90.9176471,42.5411765 L15.6235294,0.188235294 L0.564705882,8.65882353 L89.9764706,59.4823529 L181.270588,8.65882353 L166.211765,0.188235294 Z" fill="#D6D6D6"></path>
                          <path d="M151.152941,42.5411765 L151.152941,96.1882353 L166.211765,104.658824 L166.211765,34.0705882 L151.152941,42.5411765 Z" fill="#EFEFEF"></path>
                          <path d="M75.8588235,138.541176 L151.152941,96.1882353 L166.211765,104.658824 L105.976471,138.541176 L165.270588,172.423529 L225.505882,138.541176 L240.564706,147.011765 L165.270588,189.364706 L75.8588235,138.541176 Z" fill="#D6D6D6"></path>
                          <path d="M75.8588235,138.541176 L75.8588235,156.423529 L165.270588,207.247059 L165.270588,189.364706 L75.8588235,138.541176 Z" fill="#EFEFEF"></path>
                          <path d="M240.564706,147.011765 L240.564706,94.3058824 L225.505882,85.8352941 L225.505882,138.541176 L240.564706,147.011765 Z" fill="#EFEFEF"></path>
                          <path d="M165.270588,189.364706 L240.564706,147.011765 L240.564706,94.3058824 L255.623529,85.8352941 L255.623529,156.423529 L165.270588,207.247059 L165.270588,189.364706 Z" fill="#949494"></path>
                          <path d="M255.623529,85.8352941 L240.564706,94.3058824 L225.505882,85.8352941 L240.564706,77.3647059 L255.623529,85.8352941 Z" fill="#D6D6D6"></path>
                          <path d="M240.564706,77.3647059 L240.564706,59.4823529 L255.623529,51.0117647 L255.623529,68.8941176 L240.564706,77.3647059 Z" fill="#949494"></path>
                          <path d="M240.564706,59.4823529 L240.564706,77.3647059 L225.505882,68.8941176 L225.505882,51.0117647 L240.564706,59.4823529 Z" fill="#EFEFEF"></path>
                          <path d="M255.623529,51.0117647 L240.564706,59.4823529 L225.505882,51.0117647 L240.564706,42.5411765 L255.623529,51.0117647 Z" fill="#D6D6D6"></path>

                        </svg>
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>Material-UI</Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <svg width="50" height="50" viewBox="0 0 256 244" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC" /></svg>
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>Redux</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <svg width="50" height="50" viewBox="0 0 256 140" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">

                          <path d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z" fill="#000000"></path>
                          <path d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z" fill="#D0021B"></path>

                        </svg>
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>React Router</Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faCss3} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>CSS3</Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faGithub} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>Git</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>HTML</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faNpm} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>Npm</Typography>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper elevation={6} >
                  <Grid item container direction='column' alignContent='center' alignItems='center'  >
                    <Grid item style={{ marginTop: '1rem' }}>
                      <IconButton>
                        <FontAwesomeIcon icon={faGear} style={{ fontSize: '3rem' }} />
                      </IconButton>
                    </Grid>
                    <Grid item >
                      <Typography>REST API</Typography>
                    </Grid>
                  </Grid>
                </Paper>

              </Box>
            </Grid>

          </Grid>

        </Grid>
      </Container>
    </section>


    //   <section id="acerca">
    //   <div class="container">
    //     <h2 class="section__title">Acerca</h2>
    //     <div class="about__grid">
    //       <div class="about__description">
    //         <h3>¿Quién soy?</h3>
    //         <h2>Soy un apasionado por el desarrollo web</h2>
    //         <p>
    //           Vivo en Chile - Quinta Región y he estado diseñando sitios web
    //           que cumplen con la tendencia de diseño
    //         </p>
    //         <a
    //           class="button--cta"
    //           href="./assets/CV.hbto.valenzuela.pdf"
    //           download="HumbertoValenzuelaCV"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <i class="fas fa-file-download"></i>Download CV
    //         </a>
    //       </div>
    //       <div class="about__skills">
    //         <div class="skill__title">
    //           <h3>Mis Habilidades:</h3>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-html5"></i>
    //           <div class="skill__name">HTML</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-css3-alt"></i>
    //           <div class="skill__name">CSS</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-js"></i>
    //           <div class="skill__name">JAVASCRIPT</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-sass"></i>
    //           <div class="skill__name">SASS</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-bootstrap"></i>
    //           <div class="skill__name">BOOTSTRAP</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-react"></i>
    //           <div class="skill__name">REACT</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-git-alt"></i>
    //           <div class="skill__name">GIT</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fab fa-node"></i>
    //           <div class="skill__name">NODE</div>
    //         </div>
    //         <div class="skill__item">
    //           <i class="fas fa-database"></i>
    //           <div class="skill__name">SQL</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Sobre