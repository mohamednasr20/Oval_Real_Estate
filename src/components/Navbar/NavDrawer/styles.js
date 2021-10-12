import { makeStyles } from '@mui/styles';

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
  drawerList: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));

export default useStyles;
