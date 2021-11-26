import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3, 0),
  },
  search: {
    margin: theme.spacing(1, 0),
  },

  btn: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1.5),
  },
}));

export default useStyles;
