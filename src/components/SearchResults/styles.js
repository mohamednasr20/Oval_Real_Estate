import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(16),
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: theme.spacing(2),
  },
  header: {
    fontWeight: '600',
    '& span': {
      color: theme.palette.secondary.main,
    },
  },
  resultsContainer: {
    marginTop: theme.spacing(6),
  },
}));

export default useStyles;
