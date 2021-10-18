import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    margin: 'auto',
  },
  caption: {
    marginBottom: theme.spacing(2),
    color: '#B3B1B7',
  },
  heading: {
    fontSize: 26,
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    lineHeight: 1.35,

    [theme.breakpoints.up('sm')]: {
      fontSize: 32,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
    },
  },
}));

export default useStyles;
