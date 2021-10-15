import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  searchField: {
    padding: theme.spacing(1),
    height: '100%',
  },
  searchBtn: {
    marginLeft: 'auto',
    color: '#FFFFFF',
    borderRadius: 25,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  noBorder: {
    border: 'none',
  },
}));

export default useStyles;
