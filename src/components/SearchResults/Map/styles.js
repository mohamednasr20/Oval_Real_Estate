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
}));

export default useStyles;
