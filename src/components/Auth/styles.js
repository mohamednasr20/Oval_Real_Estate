import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '80%',
    marginTop: '22%',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    borderRadius: 15,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: '15%',
      width: 400,
    },
    [theme.breakpoints.up('md')]: {},
  },
  heading: {
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(1),
  },
  lockIcon: {
    color: theme.palette.primary.main,
  },
  authError: {
    marginBottom: theme.spacing(0.5),
    color: '#ef5350',
  },
  nameFields: {
    display: 'flex',
    marginTop: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  changeForm: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    cursor: 'pointer',
  },
}));

export default useStyles;
