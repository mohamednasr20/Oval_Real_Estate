import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

export const MyDrawer = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: '70%',
    paddingTop: 2,
    background: 'dark',
    zIndex: 3,
  },
}));

export const DrawerContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));
