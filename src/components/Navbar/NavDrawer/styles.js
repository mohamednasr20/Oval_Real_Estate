import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

export const MyDrawer = styled(Drawer)(({ theme }) => ({
  display: { sm: 'none' },
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: '50%',
    paddingTop: 2,
    background: 'dark',
    zIndex: 3,
  },
}));
