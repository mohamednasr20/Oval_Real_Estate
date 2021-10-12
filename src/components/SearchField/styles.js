import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const SearchWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  borderRadius: 2,
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  color: '#FFF',
  borderRadius: 15,
}));
