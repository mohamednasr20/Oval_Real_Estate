import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(14),
    '& h5': {
      margin: theme.spacing(2, 0),
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
