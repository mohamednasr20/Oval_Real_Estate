import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
    padding: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    borderRadius: 15,
    minHeight: 350,
  },
  icon: {
    width: 72,
    height: 72,
    marginBottom: theme.spacing(1.5),
  },
  text: {
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(0.5),
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(4),
    },
  },
}));

export default useStyles;
