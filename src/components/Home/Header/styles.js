import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: 860,
    },
    [theme.breakpoints.up('lg')]: {
      height: 660,
    },
  },
  container: {
    position: 'relative',
  },
  TextWrapper: {
    position: 'absolute',
    maxWidth: '100%',
    textAlign: 'center',
    top: 110,
    left: 0,
    right: 0,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
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
      marginLeft: 0,
      marginRight: 0,
    },
  },
  heading: {
    fontSize: 32,
    [theme.breakpoints.up('sm')]: {
      fontSize: 42,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 48,
    },
  },
  mainHeading: {
    fontWeight: 700,
  },
  subHeading: {
    fontWeight: 400,
  },

  subtitle: {
    fontWeight: 400,
    fontSize: 14,
    paddingTop: theme.spacing(2),
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
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    maxHeight: '100%',
  },
}));

export default useStyles;
