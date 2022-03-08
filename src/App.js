import { useMemo, useState } from 'react';
// MUI
// import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PortaFolio from './PortaFolio';

function App() {
  console.log('render app');
  const [escogerColor, setEscogerColor] = useState('dark')
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: escogerColor,
        },
      }),
    [escogerColor],
  );
  
  return (
    <ThemeProvider theme={theme}>
      
      <PortaFolio 
        setEscogerColor={setEscogerColor}
        escogerColor={escogerColor}
      />
    </ThemeProvider>
  );
}

export default App;
