import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: '70%',
      paddingTop: 2,
      background: 'dark',
      zIndex: 3,
    },
  },
  link: {
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: '400',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    margin: 'auto',
    textTransform: 'none',
  },

  closeIconWrap: {
    marginLeft: 'auto',
  },
  drawerList: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  authBtn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    borderRadius: 15,
  },
}));

export default useStyles;
