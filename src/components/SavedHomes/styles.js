import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(14),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    textAlign: 'center',
  },

  listContainer: {
    marginTop: theme.spacing(6),
  },
  lead: {
    maxWidth: 280,
    marginBottom: theme.spacing(3),
  },
  btn: {
    color: '#ffffff',
  },
}));

export default useStyles;
