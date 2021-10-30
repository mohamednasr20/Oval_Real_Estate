import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  loading: {
    minWidth: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(6),
  },
}));

export default useStyles;
