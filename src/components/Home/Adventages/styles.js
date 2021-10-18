import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  shapeBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: theme.spacing(5),
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontSize: 36,
    fontWeight: '600',
  },
  comparison: {
    minWidth: '100%',
    margin: 'auto',
    padding: theme.spacing(2),
    borderRadius: '50px',
    marginTop: theme.spacing(8),
    padding: theme.spacing(8),

    [theme.breakpoints.up('lg')]: {
      minWidth: 900,
      margin: theme.spacing(8),
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
    alignItems: 'start',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    fontSize: 15,
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'right',
    },
  },
  oval: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'left',
    },
  },
  closeIcon: {
    marginLeft: theme.spacing(1),
  },
  checkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  facts: {
    paddingTop: theme.spacing(5),
    textAlign: 'center',
    '& h3': {
      marginBottom: theme.spacing(3),
      fontWeight: '400',
      fontSize: 48,
      [theme.breakpoints.up('lg')]: {
        fontSize: 72,
      },
    },
    '& h6': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default useStyles;
