import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  toggleGroup: {
    '& .MuiToggleButton-root.Mui-selected': {
      background: 'rgba(0, 208, 149, 0.2)',
      color: theme.palette.secondary.main,
      borderRadius: 15,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectInput: {
    '& .MuiInputBase-input': {
      padding: theme.spacing(1),
      borderRadius: 15,
      //   border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
}));

export default useStyles;
