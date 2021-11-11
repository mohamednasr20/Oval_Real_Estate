import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginBottom: theme.spacing(8),
    minWidth: '100%',
  },
  imgDiv: {
    marginRight: theme.spacing(0.25),
    marginLeft: theme.spacing(0.25),
    height: 300,

    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: 15,
    },
  },
}));

export default useStyles;
