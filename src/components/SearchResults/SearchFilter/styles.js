import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    minWidth: '100%',
  },
  filterBtn: {
    marginLeft: 'auto',
    display: 'inline-block',
  },
  filterIcon: {
    marginRight: theme.spacing(0.5),
    color: theme.palette.primary.main,
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
    marginTop: theme.spacing(3),

    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      marginLeft: theme.spacing(6),
    },
  },
  toggleMap: {
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(3),
    '& label': {
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },

    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
    },
  },
}));

export default useStyles;
