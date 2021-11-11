import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
    },

    '& .MuiFormControlLabel-label': {
      color: '#A7A6A8',
    },
  },
  heading: {
    fontWeight: '600',
    fontSize: 24,
  },
  secondaryHeader: {
    fontWeight: '600',
    fontSize: 22,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
  },
  estimate: {
    marginRight: 'auto',
    fontSize: 12,
    marginBottom: theme.spacing(5),
  },
  flex: {
    display: 'flex',
    margin: theme.spacing(2, 0),
  },
  textField: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: '100%',
  },
  submitBtn: {
    color: '#ffffff',
    marginTop: theme.spacing(3),
    borderRadius: 15,
  },
  meetTypeBtn: {
    borderRadius: 15,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),
    width: '50%',
  },
}));

export default useStyles;
