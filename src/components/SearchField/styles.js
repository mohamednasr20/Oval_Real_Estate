import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ({ pathname }) =>
      pathname === '/' ? theme.spacing(1) : theme.spacing(0.25),
    display: 'flex',
    width: ({ pathname }) => (pathname === '/search' ? 150 : 'auto'),
    flexDirection: ({ pathname }) => (pathname === '/' ? 'column' : 'row'),
    alignItems: 'center',
    marginTop: ({ pathname }) =>
      pathname === '/search' ? theme.spacing(1) : theme.spacing(5),
    borderRadius: theme.spacing(1),

    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      flexDirection: ({ pathname }) => pathname === '/' && 'row',
      width: ({ pathname }) => (pathname === '/search' ? 300 : 'auto'),
    },
  },
  searchField: {
    padding: ({ pathname }) =>
      pathname === '/' ? theme.spacing(0.5, 1) : theme.spacing(0, 1),
    height: '100%',
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:foucs': {
      borderBottom: 'none',
    },
  },
  searchBtn: {
    marginLeft: 'auto',
    color: '#FFFFFF',
    borderRadius: 25,
    width: ({ pathname }) => (pathname === '/' ? '100%' : 'auto'),
    [theme.breakpoints.up('sm')]: {
      width: ({ pathname }) => pathname && 'auto',
    },
  },
  noBorder: {
    border: 'none',
  },

  searchIcon: {
    color: '#FFFFFF',
    background: theme.palette.text.secondary,
    padding: theme.spacing(0.25),
    borderRadius: 3,
    cursor: 'pointer',
  },
}));

export default useStyles;
