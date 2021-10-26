import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    minWidth: (showMap) => (showMap ? 260 : 290),
  },
  media: {
    height: 200,
    borderRadius: '10px',
  },
  flex: {
    display: 'flex',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },

  subtitle: {
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
