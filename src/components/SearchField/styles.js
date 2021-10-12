import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const SearchWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  borderRadius: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  color: '#FFF',
  borderRadius: 15,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));
