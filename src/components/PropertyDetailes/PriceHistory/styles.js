import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: 633,
    },
  },
  tableHead: {
    background: '#D3D3D3',
  },
}));

export default useStyles;
