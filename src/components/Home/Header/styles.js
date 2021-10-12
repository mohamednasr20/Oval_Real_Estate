import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  TextWrapper: {
    position: 'absolute',
    maxWidth: '100%',
    textAlign: 'center',
    top: 110,
    left: 0,
    right: 0,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      maxWidth: 416,
      top: 140,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 515,
      top: 185,
      left: '12.22%',
      right: 'auto',
    },
  },
  subtitle: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  imgBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: 710,
    [theme.breakpoints.up('sm')]: {
      height: 860,
    },
    [theme.breakpoints.up('lg')]: {
      height: 660,
    },
  },
}));

export default useStyles;
