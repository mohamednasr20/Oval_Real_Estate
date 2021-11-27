import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '90vh',
    width: '100%',
    display: (showMap) => (showMap ? 'block' : 'none'),
  },
  map: {
    borderRadius: '25%',
  },
  markerContainer: {
    textAlign: 'center',
    width: 25,
    height: 25,
    padding: theme.spacing(1),
    color: '#ffffff',
    background: theme.palette.secondary.main,
    borderRadius: '50%',
  },
  media: {
    height: 150,
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
}));

export default useStyles;
