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
  inputBase: {
    padding: theme.spacing(1),
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
}));

export default useStyles;
