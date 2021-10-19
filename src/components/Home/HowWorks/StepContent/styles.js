import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'left',
    marginBottom: theme.spacing(8),
  },
  imgBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1,
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 440,
    height: 400,
    padding: theme.spacing(6),
    margin: theme.spacing(1),
    borderRadius: '5%',
  },
  cardHeader: {
    fontSize: 24,
    fontWeight: '600',
    paddingRight: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  cardAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
  activeStep: {
    marginRight: theme.spacing(2),
    border: '#E8E7E8 solid 0.5px',
    borderRadius: 5,
    padding: theme.spacing(0.5),
  },
  cardBtn: {
    fontWeight: '500',
  },
}));

export default useStyles;
