import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(14),

    '& h5': {
      margin: theme.spacing(2, 0),
      fontSize: 20,
      fontWeight: '600',
      [theme.breakpoints.up('sm')]: {
        fontSize: 34,
      },
    },
  },
  main: {
    [theme.breakpoints.up('md')]: { marginRight: theme.spacing(5) },
  },

  lead: {
    fontWeight: '400',
    fontSize: 16,
  },
  pSection: {
    padding: theme.spacing(4, 0),
  },
  secondaryHeader: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      fontSize: 22,
    },
  },

  flex: {
    display: 'flex',
    '& h6': {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(4),
      marginBottom: theme.spacing(3),
    },
  },
  checkIcon: {
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(0.2),
  },
  detalies: {
    margin: theme.spacing(4, 0),
  },
}));

export default useStyles;
