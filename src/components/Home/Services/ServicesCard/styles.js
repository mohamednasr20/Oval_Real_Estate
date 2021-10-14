import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    padding: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    borderRadius: 15,
  },
  icon: {
    width: 72,
    height: 72,
    marginBottom: theme.spacing(1.5),
  },
}));

export default useStyles;
