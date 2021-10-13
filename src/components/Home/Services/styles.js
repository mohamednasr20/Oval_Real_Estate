import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  cardsGrid: {
    marginTop: theme.spacing(15),
  },
}));

export default useStyles;
