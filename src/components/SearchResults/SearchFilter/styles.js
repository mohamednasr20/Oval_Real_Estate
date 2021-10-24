import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    minWidth: '100%',
  },
  toggleGroup: {
    marginRight: theme.spacing(4),
    '& .MuiToggleButton-root.Mui-selected': {
      background: 'rgba(0, 208, 149, 0.2)',
      color: theme.palette.secondary.main,
      borderRadius: 15,
    },
  },
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
  saveSearch: {
    marginLeft: theme.spacing(6),
  },
  toggleMap: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(15),
    '& label': {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
