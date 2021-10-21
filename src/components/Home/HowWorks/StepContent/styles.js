import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'left',
    marginBottom: theme.spacing(8),
    height: 600,
    [theme.breakpoints.up('sm')]: {
      height: 360,
    },
    [theme.breakpoints.up('sm')]: {
      height: 428,
    },
  },
  imgBg: {
    position: 'absolute',
    top: 0,
    height: '100%',
    bottom: 0,
    width: '100%',
    zIndex: -1,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '80%%',
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius: '5%',
    [theme.breakpoints.up('sm')]: {
      MaxHeight: '100%',
      padding: theme.spacing(4),
      width: 360,
      right: 0,
      top: 0,
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
      width: 440,
    },
  },
  cardHeader: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(12),
    },
  },
  cardAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(4),
    },
  },

  activeStep: {
    marginRight: theme.spacing(0.5),
    border: '#E8E7E8 solid 0.5px',
    borderRadius: 5,
    padding: theme.spacing(0.5),
    marginTop: 'auto',

    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    },
  },
  cardBtn: {
    fontWeight: '500',
  },
}));

export default useStyles;
