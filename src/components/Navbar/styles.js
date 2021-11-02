import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  nav: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  logo: {
    marginLeft: ({ pathname }) => (pathname === '/' ? 'auto' : 0),
    marginRight: 'auto',
  },

  link: {
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: '400',
    color: theme.palette.text.primary,
    marginRight: theme.spacing(3),
  },
  activLink: {
    color: theme.palette.primary.main,
  },

  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   // marginRight: theme.spacing(2),
  //   // marginLeft: 0,
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //   },
  // },
  // iconBtn: {
  //   marginRight: theme.spacing(2),
  // },

  // SearchIconWrapper: {
  //   paddingLeft: theme.spacing(0.5),
  //   paddingRight: theme.spacing(0.5),
  //   color: theme.palette.common.white,
  //   background: theme.palette.text.primary,
  //   height: '100%',
  //   borderRadius: 8,
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // searchInputBase: {
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 0, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('md')]: {
  //       width: '20ch',
  //     },
  //   },
  // },
  authBtn: {
    marginRight: theme.spacing(2),
    borderRadius: 25,
  },
}));

export default useStyles;
