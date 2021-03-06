import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: '10px',
    height: 346,
    marginBottom: theme.spacing(2),
    margin: 'auto',
  },
  media: {
    height: 180,
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
  cardContent: {
    padding: theme.spacing(1),
  },
  favoriteIcon: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: '#ffffff',
    cursor: 'pointer',
  },

  iconRed: {
    color: '#d32f2f',
  },
  chip: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
}));

export default useStyles;
