import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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
    marginBottom: theme.spacing(3),
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontSize: 36,
    fontWeight: '600',
  },

  facts: {
    paddingTop: theme.spacing(2),
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
