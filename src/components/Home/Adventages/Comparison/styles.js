import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  comparison: {
    minWidth: '100%',
    margin: 'auto',
    padding: theme.spacing(6),
    borderRadius: '50px',
    marginTop: theme.spacing(4),

    [theme.breakpoints.up('lg')]: {
      minWidth: 900,
      marginRight: theme.spacing(6),
      marginLeft: theme.spacing(6),
      padding: theme.spacing(10),
    },
  },
  comparisonHeading: {
    fontWeight: '600',
    fontSize: 24,
    marginBottom: theme.spacing(5),
  },
  vs: {
    color: '#8E8C95',
    width: 32,
    textAlign: 'center',
    margin: 'auto',
    border: '#E8E7E8 solid 0.5px',
    borderRadius: 5,
    padding: theme.spacing(0.5),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
  },
  line: {
    [theme.breakpoints.up('lg')]: {
      width: '1px',
      background: '#E8E7E8',
      height: '100%',
      margin: 'auto',
    },
  },

  logoSpan: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },

  traditional: {
    display: 'flex',
    flexDirection: 'row-reverse',
    textAlign: 'left',
    alignItems: 'start',
    justifyContent: 'start',
    marginTop: theme.spacing(2),
    fontSize: 15,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'right',
    },
  },
  oval: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    textAlign: 'left',
    fontSize: 15,
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'left',
    },
  },
  closeIcon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
  checkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
}));

export default useStyles;
