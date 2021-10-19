import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    width: '100%',
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  subtitle: {
    paddingBottom: theme.spacing(3),
    color: '#B3B1B7',
  },
  header: {
    color: '#3B3A4',
    fontSize: 36,
    fontWeight: '600',
    maxWidth: 554,
    margin: 'auto',
  },
  stepperWrapper: {
    marginTop: theme.spacing(5),
  },
}));

export default useStyles;
