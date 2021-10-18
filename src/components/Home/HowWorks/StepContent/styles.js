import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  imgBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1,
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 440,
    height: 400,
    padding: theme.spacing(6),
    margin: theme.spacing(1),
    borderRadius: '5%',
  },
}));

export default useStyles;
