import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(16),
    '& .MuiGrid-container': {
      flexDirection: 'column-reverse',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
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
    '& .MuiGrid-container': {
      flexDirection: 'row',
    },
  },
  loading: {
    minWidth: '100%',
    textAlign: 'center',
  },
}));

export default useStyles;
