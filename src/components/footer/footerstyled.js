import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';

export const Tipografia = styled(Typography)( ({ theme }) => ({
  textAlign:'center',  
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  }
}));

export const Footerstyled = styled(BottomNavigation)(({ theme }) => ({ 
  backgroundColor: theme.palette.mode,
}));

