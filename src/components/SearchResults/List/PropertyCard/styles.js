import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: '10px',
    width: 290,
    height: 346,
    marginBottom: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 230,
    },
    [theme.breakpoints.up('md')]: {
      width: 260,
    },
    [theme.breakpoints.up('lg')]: {
      width: 290,
    },
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
  chip: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
}));

export default useStyles;
