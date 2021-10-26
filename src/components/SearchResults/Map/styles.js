import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '70vh',
    display: (showMap) => (showMap ? 'block' : 'none'),
  },
  map: {
    borderRadius: '25%',
  },
}));

export default useStyles;
