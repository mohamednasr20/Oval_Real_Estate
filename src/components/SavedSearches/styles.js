import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(14),
  },
  body: {
    margin: theme.spacing(1, 0),
    maxWidth: 600,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    textAlign: 'center',
  },

  lead: {
    maxWidth: 280,
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
