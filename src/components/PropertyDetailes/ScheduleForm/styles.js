import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControlLabel-label': {
      color: '#A7A6A8',
    },
  },
  secondaryHeader: {
    fontWeight: '600',
    fontSize: 22,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  flex: {
    display: 'flex',
    margin: theme.spacing(2, 0),
  },
  textField: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
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
  },
}));

export default useStyles;
