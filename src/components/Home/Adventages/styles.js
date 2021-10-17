import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    color: '#FFFFFF',
    textAlign: 'center',
    height: 1080,
    paddingTop: theme.spacing(10),
  },
  shapeBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    zIndex: -1,
  },

  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100%',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: theme.spacing(5),
  },
  heading: {
    marginBottom: theme.spacing(3),
    fontSize: 36,
    fontWeight: '600',
  },
  comparison: {
    minWidth: '900px',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(6),
    borderRadius: '50px',
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
  },
  line: {
    width: '1px',
    background: '#E8E7E8',
    height: '100%',
    margin: 'auto',
  },

  logoSpan: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },

  traditional: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    marginTop: theme.spacing(2),
  },
  oval: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginTop: theme.spacing(2),
  },
  closeIcon: {
    marginLeft: theme.spacing(1),
  },
  checkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  facts: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    '& h3': {
      marginBottom: theme.spacing(3),
    },
    '& h6': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default useStyles;
