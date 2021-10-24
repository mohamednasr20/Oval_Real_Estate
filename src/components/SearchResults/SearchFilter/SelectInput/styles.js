import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    border: `0.5px solid rgba(0, 0, 0, 0.1)`,
    borderRadius: 15,
  },
  selectInput: {
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 2),
      borderRadius: 15,
    },
  },
}));

export default useStyles;
