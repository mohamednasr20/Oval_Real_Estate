import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const TextWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  maxWidth: '100%',
  textAlign: 'center',
  top: 110,
  left: 0,
  right: 0,
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    maxWidth: 416,
    top: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 515,
    top: 185,
    left: '12.22%',
    right: 'auto',
  },
}));
export const SecondaryHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 32,

  [theme.breakpoints.up('sm')]: {
    fontSize: 42,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: 48,
  },
}));

export const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 32,
  marginTop: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    fontSize: 42,
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: 48,
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 14,
  marginTop: theme.spacing(3),
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),

  [theme.breakpoints.up('sm')]: {
    fontSize: 16,
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: 18,
  },
}));

export const ImageBox = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  width: '100%',
  height: '100vh',
  [theme.breakpoints.up('sm')]: {
    height: 860,
  },
  [theme.breakpoints.up('lg')]: {
    height: 660,
  },
}));
